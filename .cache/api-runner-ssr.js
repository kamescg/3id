var plugins = [{
      plugin: require('/Users/admin/Documents/projects/rapid/code/rapid-dapp-frontend/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/admin/Documents/projects/rapid/code/rapid-dapp-frontend/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/admin/Documents/projects/rapid/code/rapid-dapp-frontend/node_modules/gatsby-plugin-stripe/gatsby-ssr'),
      options: {"plugins":[],"async":true},
    },{
      plugin: require('/Users/admin/Documents/projects/rapid/code/rapid-dapp-frontend/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"horizin","short_name":"horizin","start_url":"/","background_color":"#366adc","theme_color":"#366adc","display":"minimal-ui","icon":"src/core/images/gatsby-icon.png"},
    },{
      plugin: require('/Users/admin/Documents/projects/rapid/code/rapid-dapp-frontend/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
