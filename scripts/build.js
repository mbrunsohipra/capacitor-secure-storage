const { execSync } = require('child_process')

const sourceMap = process.env.SOURCE_MAP || ''
console.log(`Executing tsc ${sourceMap} && rollup -c rollup.config.mjs`)
execSync(`tsc ${sourceMap} && rollup -c rollup.config.mjs`, { stdio: 'inherit' })
