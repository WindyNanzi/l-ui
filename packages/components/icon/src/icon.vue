<script setup lang="ts">
import { createNameSpace } from '@l-ui/utils'
import { computed } from 'vue'
import { IconProps } from './icon'

defineOptions({
  name: 'LIcon',
})
const props = defineProps(IconProps)
const { bem } = createNameSpace('icon')
const style = computed(() => {
  if (!props.color && !props.size) {
    return {}
  }

  return {
    ...(props.color ? { color: props.color } : {}),
    ...(props.size ? { fontSize: `${props.size}px` } : {}),
  }
})
</script>

<template>
  <i :class="bem('')" :style="style">
    <slot />
  </i>
</template>

<style>

</style>
