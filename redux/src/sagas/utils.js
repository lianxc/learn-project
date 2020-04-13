export function formatAction(action, namespace) {
  return {
    ...action,
    type: action.type.replace(namespace + '/', '')
  }
}