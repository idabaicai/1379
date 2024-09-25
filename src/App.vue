<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <main class="px-7 py-10 of-x-hidden">
    <router-view></router-view>
  </main>
</template>
<style scoped lang="less"></style>
