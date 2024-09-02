<template>
    <li class="nav-item" :class="{ active: isActive }">
        <router-link :to="href" class="nav-link">
            <slot></slot>
        </router-link>
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