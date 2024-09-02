<template>
    <div class="form-group">
        <label :for="name">{{ label }}</label>
        <Input :type="text" :name="name" v-model="localValue" />
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
    }
})

const localValue = ref(props.modelValue)

const emit = defineEmits(['update:modelValue'])

watch(localValue, (newValue) => {
    emit('update:modelValue', newValue)
})

</script>