<template>
    <div class="form-group">
        <label :for="name">{{ label }}</label>
        <Input :type="type" :name="name" v-model="localValue" :disabled="disabled" />
    </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';

const props = defineProps({
    label: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'text'
    },
    name: {
        type: String,
        required: true
    },
    modelValue: {
        type: [String, Number],
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    }
})

const localValue = ref(props.modelValue)

const emit = defineEmits(['update:modelValue'])

watch(() => props.modelValue, (newValue) => {
    localValue.value = newValue
})

watch(localValue, (newValue) => {
    emit('update:modelValue', newValue)
})

</script>