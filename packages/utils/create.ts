// block 代码块 element 元素 modifier 装饰 state 状态
// l-button
// l-button__element
// l-button__element--disable
// is-checked is-enabled

/**
 * class bem  命名规范生成
 * @param name
 * @param blockSuffix
 * @param element
 * @param modifier
 */
function _bem(name: string, blockSuffix: string, element: string, modifier: string) {
  if (blockSuffix) {
    name += `-${blockSuffix}`
  }

  if (element) {
    name += `__${element}`
  }

  if (modifier) {
    name += `--${modifier}`
  }

  return name
}

function createBEM(name: string) {
  const b = (blockSuffix = '') => _bem(name, blockSuffix, '', '')
  const e = (element = '') => _bem(name, '', element, '')
  const m = (modifier = '') => _bem(name, '', '', modifier)
  const be = (blockSuffix = '', element = '') => _bem(name, blockSuffix, element, '')
  const bm = (blockSuffix = '', modifier = '') => _bem(name, blockSuffix, '', modifier)
  const em = (element = '', modifier = '') => _bem(name, '', element, modifier)
  const bem = (blockSuffix = '', element = '', modifier = '') => _bem(name, blockSuffix, element, modifier)

  return { b, e, m, be, bm, em, bem }
}

function createNameSpace(name: string) {
  const prefixName = `l-${name}`
  return createBEM(prefixName)
}

export {
  createNameSpace,
}
