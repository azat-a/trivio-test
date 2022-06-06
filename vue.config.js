const { defineConfig } = require('@vue/cli-service');
const path = require('path');

/* eslint-disable indent */
module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
    svgRule.clear();

    svgRule
      .test(/\.svg$/i)
      .oneOf('inline')
        .resourceQuery(/inline/)
        .type('asset/source')
        .end()
      .oneOf('file')
        .type('asset')
        .set('generator', {
          filename: 'img/[name].[hash:8][ext]',
        });

    const scssAliasRule = config.resolve.alias;
    scssAliasRule
      .set('components', path.resolve(__dirname, 'src/components'));
  },
});
