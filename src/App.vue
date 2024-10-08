<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter()

onMounted(() => {
  console.log(route, router)
  console.log(router.getRoutes(), 'get routes')
})
</script>

<template>
  <main class="px-7 py-10 of-x-hidden">
    <router-view></router-view>
  </main>
</template>
<style scoped lang="less"></style>
