<script setup lang="ts">

</script>

<template>
  <div>
    <l-icon color="red" :size="14" style="margin-right: 10px;">
      <i-uiw-adobe />
    </l-icon>
    <l-icon color="yellow" :size="14">
      <i-uiw-android-o />
    </l-icon>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
