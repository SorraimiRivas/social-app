const {withAppDelegate: withAppDelegateExpo} = require('@expo/config-plugins')

const replaceDelegateString = (
  appDelegate,
  find,
  replace,
  keepFound = false,
) => {
  if (keepFound) {
    return appDelegate.replace(find, `${find}\n${replace}`)
  }

  return appDelegate.replace(find, replace)
}

const withAppDelegate = config => {
  // eslint-disable-next-line no-shadow
  return withAppDelegateExpo(config, config => {
    config.modResults.contents = replaceDelegateString(
      config.modResults.contents,
      '#import "AppDelegate.h"',
      '#import <CodePush/CodePush.h>',
      true,
    )
    config.modResults.contents = replaceDelegateString(
      config.modResults.contents,
      'return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];',
      'return [CodePush bundleURL];',
    )
    return config
  })
}

module.exports = {withAppDelegate}
