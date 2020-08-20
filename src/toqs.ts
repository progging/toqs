/***
 * Transforms an object to a query string. Object-like values as serialized as JSON.
 */
export default (parameters: any) => {
  if (!parameters) return ''

  return (
    '?' +
    Object.keys(parameters)
      .map((key) => {
        const rawValue = parameters[key]
        const value = isObjectLike(rawValue)
          ? JSON.stringify(rawValue)
          : rawValue
        return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      })
      .join('&')
  )
}

const isObjectLike = (value: any) => value != null && typeof value == 'object'
