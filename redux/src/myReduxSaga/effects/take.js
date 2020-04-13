// take方法
export function take(patternOrChannel = '*', multicastPattern) {
  // 在我们的demo代码中，只会走下面这个分支
  if (is.pattern(patternOrChannel)) {
    return makeEffect(effectTypes.TAKE, { pattern: patternOrChannel })
  }
  if (is.multicast(patternOrChannel) && is.notUndef(multicastPattern) && is.pattern(multicastPattern)) {
    return makeEffect(effectTypes.TAKE, { channel: patternOrChannel, pattern: multicastPattern })
  }
  if (is.channel(patternOrChannel)) {
    return makeEffect(effectTypes.TAKE, { channel: patternOrChannel })
  }
}
