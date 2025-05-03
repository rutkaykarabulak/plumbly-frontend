<script setup lang="ts">
  const { optimizeImage } = useOptimizeImage()

  const headerImageUrl =
    'landing_image.png'

  const headerImageOptimized = optimizeImage(headerImageUrl)
</script>
<template>
  <div class="overflow-hidden max-h-40">
    <v-img
      height="200"
      cover
      :src="headerImageOptimized.src"
      :sizes="headerImageOptimized.sizes"
      :srcset="headerImageOptimized.srcset"
    />
    <!-- <v-img height="200" cover :src="headerImageUrl" /> -->
  </div>
</template>
<style scoped></style>
