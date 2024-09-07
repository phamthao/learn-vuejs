<template>
    <div v-if="localIsShow" class="alert alert-danger alert-dismissible fade show" role="alert">
        {{ message }}
        <button type="button" class="close" @click="closeAlert">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';

const props = defineProps({
    isShow: { type: Boolean, default: false },
    message: { type: String, default: '' }
})

const emit = defineEmits(['close'])

const localIsShow = ref(props.isShow)

const closeAlert = () => {
    localIsShow.value = false
    emit('close')
}

watch(() => props.isShow, (newValue) => {
    localIsShow.value = newValue
})

</script>

<style></style>