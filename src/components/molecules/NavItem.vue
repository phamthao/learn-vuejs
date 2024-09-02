<template>
    <li class="nav-item" :class="{ active: isActive }">
        <a class="nav-link" :href="href"><slot></slot></a>
    </li>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  href: {
    type: String,
    default: '#'
  },
  isActive: {
    type: Boolean,
    default: false
  }
})

</script>