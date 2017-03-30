const fs = require('fs');
const path = require('path');
const files = fs.readdirSync('results');
const named = require('./data');

const generated = files
    .map(x => ({filename: x, parsed: path.parse(x)}))
    .map(incoming => {
        const name = incoming.parsed.name;
        return {
            item: named[name],
            json: require('./results/' + name)['.js'],
            img: `img/${name}.png`
        }
    }).sort((a, b) => a.json.total.bytes - b.json.total.bytes);
fs.writeFileSync('generated.json', JSON.stringify(generated, null, 2));
module.exports = generated;
