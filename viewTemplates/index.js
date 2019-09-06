const injectStyles = require('./injectStyles')
const injectScripts = require('./injectScripts')
const injectConstructorSettings = require('./injectConstructorSettings')
const injectPropTypesSettings = require('./injectPropTypesSettings')
const injectConnectSettings = require('./injectConnectSettings')
const injectStyledComponentsSettings = require('./injectStyledComponentsSettings')

module.exports = function (target, {
  withPropTypes,
  withConstructor,
  withConnect,
  withStyledComponents,
}) {
  return `
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">

  <title>Code Gen</title>
  <meta name="description" content="Code Gen">
  <meta name="author" content="Maksim Tarhunakau">

  ${injectStyles()}
</head>

<body>
  <div class="field-group">
    <label for="componentName">Component Name</label>
    <input type="text" id="componentName" />
  </div>
  
  ${withConstructor ? injectConstructorSettings() : ''}
  ${withPropTypes ? injectPropTypesSettings() : ''}
  ${withConnect ? injectConnectSettings() : ''}
  ${withStyledComponents ? injectStyledComponentsSettings() : ''}
  
  <div class="actions">
    <button id="submitButton">Save</button>
  </div>

  ${injectScripts(target)}
</body>
</html>
  `
}
