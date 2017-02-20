/*
eslint
no-multi-spaces: ["error", {exceptions: {"VariableDeclarator": true}}]
padded-blocks: ["error", {"classes": "always"}]
max-len: ["error", 80]
*/
'use strict'

const test = require('tape')

const objectSize = require('.')

const obj = {a: {b: 1}, c: 2, d: {a: {d: {c: 11}}}}

test('object.size', (assert) => {

  assert
    .deepEqual(
      objectSize(obj),
      3,
      'should return 3 for an object with 3 properties'
    )

  assert.deepEqual(objectSize({}), 0, 'should return 0 for an empty object')

  assert
    .deepEqual(
      objectSize(),
      undefined,
      'should return undefined for a non js object'
    )

  assert
    .deepEqual(
      objectSize(null),
      undefined,
      'should return undefined for a non js object'
    )

  assert
    .deepEqual(
      objectSize([1, 2]),
      2,
      'should return 2 for an array with 2 elem'
    )

  assert
    .deepEqual(
      objectSize('abc'),
      3,
      'should return 3 for a string with 3 chars'
    )

  assert
    .deepEqual(
      objectSize(123),
      0,
      'should return 0 for a number'
    )

  let error = new Error()

  assert
    .deepEqual(
      objectSize(error),
      Object.keys(error).length,
      'for an Error should return the same value as Object.keys,i.e., 0'
    )

  assert.end()
})
