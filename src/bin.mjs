#!/usr/bin/env node --experimental-modules
import exclamations from './';

const help = `

    Examples
        $ exclamation'
            Holy Alps

        $ exclamation --all'
            Holy Agility
            Holy Almost
            ...

    Options
        --all   Get all exclamations instead of a random one'
`;

const args = process.argv.slice(2);
let output = exclamations.random();

if (args.includes('--help') || args.includes('-h')) {
  output = help;
}

if (args.includes('--all')) {
  output = exclamations.all.join('\n');
}

console.log(output);
process.exit();

export default output;
