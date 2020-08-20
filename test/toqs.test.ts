import { expect } from 'chai'
import toqs from '../src/toqs'

describe('TOQS', () => {
  it('should serialize invalid value to empty string', function () {
    const qs = toqs(undefined)
    expect(qs).to.equal('')
  })

  it('should serialize single object key/value to query string', function () {
    const qs = toqs({ foo: 'bar' })
    expect(qs).to.equal('?foo=bar')
  })

  it('should serialize multi-valued object to query string', function () {
    const qs = toqs({ foo: 'bar', wibble: 'wobble' })
    expect(qs).to.equal('?foo=bar&wibble=wobble')
  })

  it('should serialize multi-valued object with complex values to query string', function () {
    const qs = toqs({ a: 'parameter & company', b: 'so many spaces!?', c: 123 })
    expect(qs).to.equal(
      '?a=parameter%20%26%20company&b=so%20many%20spaces!%3F&c=123'
    )
  })

  it('should serialize multi-valued object with complex values to query string', function () {
    const qs = toqs({ a: 'parameter & company', b: 'so many spaces!?', c: 123 })
    expect(qs).to.equal(
      '?a=parameter%20%26%20company&b=so%20many%20spaces!%3F&c=123'
    )
  })

  it('should serialize inner object-like value as JSON', function () {
    const qs = toqs({ a: { b: 123, c: 'hello' } })
    expect(qs).to.equal('?a=%7B%22b%22%3A123%2C%22c%22%3A%22hello%22%7D')
  })
})
