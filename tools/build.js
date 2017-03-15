const fs = require('fs')
const execSync = require('child_process').execSync
const inInstall = require('in-publish').inInstall
const prettyBytes = require('pretty-bytes')
const gzipSize = require('gzip-size')

if (inInstall())
  process.exit(0)

const exec = (command, extraEnv) =>
  execSync(command, {
    stdio: 'inherit',
    env: Object.assign({}, process.env, extraEnv)
  })

console.log('\nBuilding ES modules ...')

exec('babel src -d .', {
  BABEL_ENV: 'es'
})

console.log('\nBuilding sortMultidimensionalArrayFunc.js ...')

exec('./node_modules/.bin/webpack src/index.js umd/sortMultidimensionalArrayFunc.js', {
  NODE_ENV: 'production'
})

console.log('\nBuilding sortMultidimensionalArrayFunc.min.js ...')

exec('./node_modules/.bin/webpack -p src/index.js umd/sortMultidimensionalArrayFunc.min.js', {
  NODE_ENV: 'production'
})

const minSize = gzipSize.sync(
  fs.readFileSync('umd/sortMultidimensionalArrayFunc.min.js')
)

const size = gzipSize.sync(
  fs.readFileSync('umd/sortMultidimensionalArrayFunc.js')
)

console.log('\nnone gzipped size %s', prettyBytes(size))
console.log('gzipped, the UMD build is %s', prettyBytes(minSize))
