const fs    = require('fs');
const input = fs.readFileSync('readme.md', 'utf8');
const files = [
    ["Preact", "cpa.json"],
    ["React", "cra.json"],
    ["Ember", "ember.json"],
    ["Glimmer", "glimmer.json"],
    ["Angular", "ng.json"],
    ["Vue", "vue.json"],
    ["Inferno", "inferno.json"]
];
const read = files.map(x => {
    return {
        name: x[0],
        json: require('./results/' + x[1])['.js']
    }
}).sort((a, b) => a.json.total.bytes - b.json.total.bytes)

const output = `
|Framework|JS Bundle Size (compressed, as served in the browser)|
|---|---|
${read.map(x => `|${x.name}|${x.json.total.pretty}|`).join('\n')}
`;
const before = `<!--perf:js-start-->`;
const after = `<!--perf:js-end-->`;
const regex = /<!--perf:js-start-->([\s\S]+?)?<!--perf:js-end-->/g;

const mdOutput = input.replace(regex, `${before}${output}${after}`);

fs.writeFileSync('readme.md', mdOutput);