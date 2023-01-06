// https://gist.github.com/ks2211/75af6cddc051f5e261a29fc25eed5789
// import {sassPlugin} from 'esbuild-sass-plugin'
// const postcss = require('postcss');
// const autoprefixer = require('autoprefixer');

const esbuild = require('esbuild')

const args = process.argv.slice(2)
const watch = args.includes('--watch')
const deploy = args.includes('--deploy')

const loader = {
  '.ttf': 'file',
  '.otf': 'file',
  '.svg': 'file',
  '.eot': 'file',
  '.woff': 'file',
  '.woff2': 'file'
}

const plugins = [
  // sassPlugin({
  //   async transform(source, resolveDir) {
  //     const { css } = await postcss(
  //         autoprefixer,
  //         tailwindcss(path.resolve(__dirname, "../tailwind.config.js"))
  //     ).process(source)
  //     return css
  //   }
  // })
]

let opts = {
  entryPoints: ['js/app.js'],
  bundle: true,
  target: 'es2017',
  outdir: '../priv/static/assets',
  logLevel: 'info',
  loader,
  plugins
}

if (watch) {
  opts = {
    ...opts,
    watch,
    sourcemap: 'inline'
  }
}

if (deploy) {
  opts = {
    ...opts,
    minify: true
  }
}

const promise = esbuild.build(opts)

if (watch) {
  promise.then(_result => {
    process.stdin.on('close', () => {
      process.exit(0)
    })

    process.stdin.resume()
  })
}
