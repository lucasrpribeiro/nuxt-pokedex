<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="rounded-lg border border-yellow-500 p-4">
    {{ name }}
  </div>
</template>