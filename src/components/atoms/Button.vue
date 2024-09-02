<template>
    <button :type="type" class="btn" @click="$emit('click')">
        <slot></slot>
    </button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
    type: {
        type: String,
        default: 'button'
    }
})

defineEmits(['click'])

</script>
