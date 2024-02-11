const {withPlugins} = require('@expo/config-plugins')
const {withAppDelegate} = require('./withAppDelegate')
const {withInfoPlist} = require('./withInfoPlist')

const CODEPUSH_DEPLOYMENT_KEY = process.env.CODEPUSH_DEPLOYMENT_KEY

const withCodePush = config => {
  return withPlugins(config, [
    [
      withInfoPlist,
      {
        deploymentKey: CODEPUSH_DEPLOYMENT_KEY,
      },
    ],
  ])
}

module.exports = withCodePush
