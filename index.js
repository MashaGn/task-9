require('fs').readFile('package.json', 'utf-8', (a, b) => a ? console.log(a) : console.log(b));
