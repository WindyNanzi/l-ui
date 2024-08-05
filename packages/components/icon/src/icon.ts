// 准备组件相关的属性和ts的类型
import type { ExtractPropTypes, PropType } from 'vue'

export const IconProps = {
  color: String,
  size: [Number, String] as PropType<number | string>,
} as const

export type IconPropsType = ExtractPropTypes<typeof IconProps>
