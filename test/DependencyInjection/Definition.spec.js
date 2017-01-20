/* global describe, beforeEach, it */

import chai from 'chai'
import Definition from '../../lib/Definition'

let assert = chai.assert

describe('Definition', () => {
  let definition

  beforeEach(() => {
    definition = new Definition('foo')
  })

  describe('addArgument', () => {
    it('should add one element to arguments array', () => {
      // Arrange.
      let argument = 'foobar'

      // Act.
      definition.addArgument(argument)

      // Assert.
      assert.lengthOf(definition.arguments, 1)
    })

    it('should add more than one argument to arguments', () => {
      // Arrange.
      let argument1 = 'foobar'
      let argument2 = 'barfoo'

      // Act.
      definition
        .addArgument(argument1)
        .addArgument(argument2)

      // Assert.
      assert.lengthOf(definition.arguments, 2)
    })
  })

  describe('addMethodCall', () => {
    it('should throw an exception if the method name is empty', () => {
      // Arrange.
      let method = ''

      // Act.
      let actual = () => { definition.addMethodCall(method) }

      // Assert.
      assert.throw(actual, Error, 'Method name cannot be empty.')
    })

    it('should add one method to the calls array', () => {
      // Arrange.
      let method = 'foo'

      // Act.
      definition.addMethodCall(method)

      // Assert.
      assert.strictEqual(definition.calls[0].method, method)
      assert.lengthOf(definition.calls[0].args, 0)
    })

    it('should add one method to the calls array with arguments', () => {
      // Arrange.
      let method = 'foo'
      let args = ['bar', 'foo']

      // Act.
      definition.addMethodCall(method, args)

      // Assert.
      assert.lengthOf(definition.calls[0].args, 2)
    })
  })

  describe('setArguments', () => {
    it('should override the entire arguments collection', () => {
      // Arrange.
      let args = ['foo', 'bar', 'foobar']

      // Act.
      definition.setArguments(args)

      // Assert.
      assert.lengthOf(definition.arguments, args.length)
    })
  })
})
