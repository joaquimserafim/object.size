/*
eslint
no-multi-spaces: ["error", {exceptions: {"VariableDeclarator": true}}]
padded-blocks: ["error", {"classes": "always"}]
max-len: ["error", 80]
no-unused-vars: ["error", {"varsIgnorePattern": "key"}]
*/
'use strict'

module.exports = size

function size (obj) {
  if (!obj) {
    return undefined
  }

  let i = 0
  let key

  for (key in obj) {
    ++i
  }

  return i
}
