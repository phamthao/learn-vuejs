<template>
    <div v-if="localIsShow" class="alert alert-danger alert-dismissible fade show" role="alert">
        {{ message }}
        <button type="button" class="close" @click="closeAlert">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
    isShow: { type: Boolean, default: false },
    message: { type: String, default: '' }
})

const localIsShow = ref(props.isShow)

const closeAlert = () => {
    localIsShow.value = false
}

</script>

<style></style>