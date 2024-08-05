// 整合组件导出组件

import { withInstall } from '@l-ui/utils'
import _Icon from './src/icon.vue'

const Icon = withInstall(_Icon)

export default Icon
export * from './src/icon'

// 这里添加的类型 可以在全局解析
declare module 'vue' {
  export interface GlobalComponents { // 接口可以自动合并
    LIcon: typeof Icon
  }
}
