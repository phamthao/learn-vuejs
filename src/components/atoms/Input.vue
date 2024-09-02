<template>
    <input :type="type" :name="name" v-model="localValue" :class="inputClass" />
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue'

const props = defineProps({
    type: {
        type: String,
        default: 'text'
    },
    name: {
        type: String,
        required: true
    },
    inputClass: {
        type: String,
        default: 'form-control'
    },
    modelValue: {
        type: [String, Number],
        default: ''
    }
})

const localValue = ref(props.modelValue)

const emit = defineEmits(['update:modelValue'])

watch(localValue, (newValue) => {
    emit('update:modelValue', newValue)
})

</script>

<style></style>