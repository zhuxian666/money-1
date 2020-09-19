/* eslint-disable */
const path =require ('path') //引入一个path模块，是nodejs的一个模块，可以用来做path

module.exports = {
    lintOnSave: false,
    chainWebpack: config => {
        const dir = path.resolve(__dirname, 'src/assets/icons')

        config.module
            .rule('svg-sprite')
            .test(/\.svg$/)
            .include.add(dir).end() // 包含 icons 目录
            .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract: false}).end()
            .use('svgo-loader').loader('svgo-loader')
            .tap(options => ({...options, plugins: [{removeAttrs: {attrs: 'fill'}}]})).end()
        config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite: true}])
        config.module.rule('svg').exclude.add(dir)
    }
}
