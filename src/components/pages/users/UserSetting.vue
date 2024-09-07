<template>
    <Headline>{{ pageTitle }}</Headline>
    <div class="container">
        <Alert :isShow="!!errorMessage" :message="errorMessage" @close="resetErrorMessage"  />
        <p v-if="loadingFetch" class="text-center">Loading...</p>
        <form v-if="!loadingFetch">
            <div class="row">
                <div class="col-md-6">
                    <FormInputGroup label="Username" name="username" v-model="inputValue.username" :disabled="isEdit" />
                </div>
                <div class="col-md-6">
                    <FormInputGroup label="Password" name="password" v-model="inputValue.password" />
                </div>
                <div class="col-md-6">
                    <FormInputGroup label="Fullname" name="fullname" v-model="inputValue.fullname" />
                </div>
                <div class="col-md-6">
                    <FormInputGroup label="Email" name="email" v-model="inputValue.email" />
                </div>
            </div>
            <router-link to="/users" class="btn btn-secondary float-right">Thoát</router-link>
            <Button class="btn-primary float-right mr-1" @click="submitForm" :disabled="loadingSubmit">
                <span v-show="loadingSubmit" class="spinner-border spinner-border-sm"></span>
                <span>Lưu</span>
            </Button>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive, computed, defineProps, watchEffect, toRaw } from 'vue';
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter()
const store = useStore()

const props = defineProps({
    id: { type: [Number, String], default: '' }
})

const pageTitle = computed(() => router.currentRoute.value.meta.title);
const isEdit = computed(() => !!props.id);

const loadingSubmit = ref(false);
const loadingFetch = ref(false);
const errorMessage = ref('');
const inputValue = reactive({
    username: '',
    password: '',
    fullname: '',
    email: ''
});

const resetErrorMessage = () => {
    errorMessage.value = '';
}

const submitForm = () => {
    const isAllEmpty = Object.keys(inputValue).some(key => inputValue[key] === '' && key !== 'password');
    errorMessage.value = '';
    if (isAllEmpty) {
        errorMessage.value = 'Tất cả các trường là bắt buộc (trừ password)';
        return;
    }
    
    const url = isEdit.value ? `user/update` : 'user/create'

    loadingSubmit.value = true
    store
        .dispatch(url, { id: props.id, data: inputValue })
        .then(() => {
            router.push({ path: '/users' })
        })
        .catch((error) => {
            loadingSubmit.value = false;
            errorMessage.value =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
        });
}

watchEffect(() => {
    if (!isEdit.value) return;

    loadingFetch.value = true
    store
        .dispatch('user/get', props.id)
        .then(() => {
            Object.assign(inputValue, toRaw(store.getters['user/detail']));
        })
        .catch((error) => {
            errorMessage.value =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
        })
        .finally(() => {
            loadingFetch.value = false;
        });
});

</script>