const fs    = require('fs');
const input = fs.readFileSync('readme.md', 'utf8');
const files = require('./generate');

const output = `
|Framework|JS Bundle Size (compressed, as served in the browser)|
|---|---|
${files.map(x => `|${x.item.framework} (${x.item.title})|${x.json.total.pretty}|`).join('\n')}
`;
const before = `<!--perf:js-start-->`;
const after = `<!--perf:js-end-->`;
const regex = /<!--perf:js-start-->([\s\S]+?)?<!--perf:js-end-->/g;

const mdOutput = input.replace(regex, `${before}${output}${after}`);

fs.writeFileSync('readme.md', mdOutput);