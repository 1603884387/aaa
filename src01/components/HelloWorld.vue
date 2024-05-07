<template>
<div>
  <span>{{ name }}</span>
我是
</div>
</template>

<script setup>
import { inject, defineProps } from 'vue'
const name = inject('name')
defineProps({
  data: {
    type: String,
    default: '22'
  }
})
</script>

<style>

</style>
