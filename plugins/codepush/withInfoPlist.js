const {withInfoPlist: withInfoPlistExpo} = require('@expo/config-plugins')

const withInfoPlist = (config, {deploymentKey}) => {
  // eslint-disable-next-line no-shadow
  return withInfoPlistExpo(config, config => {
    config.modResults.CodePushDeploymentKey = deploymentKey
    return config
  })
}

module.exports = {withInfoPlist}
