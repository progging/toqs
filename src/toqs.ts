/***
 * Transforms an object to a query string.
 */
export default (parameters: any) =>
  '?' +
  Object.keys(parameters)
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(parameters[key])}`
    )
    .join('&')
