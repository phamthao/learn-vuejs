<template>
    <h1 class="bd-title text-center">Đăng nhập</h1>
    <div class="card">
        <div class="card-body">
            <Alert :isShow="!!errorMessage" :message="errorMessage" @close="resetErrorMessage" />
            <form>
                <FormInputGroup type="text" label="Username" name="username" v-model="inputValue.username" @keyup.enter="submitForm" />
                <FormInputGroup type="password" label="Password" name="password" v-model="inputValue.password" @keyup.enter="submitForm" />
                <div class="text-center">
                    <Button class="btn-primary" @click="submitForm" :disabled="loadingSubmit">
                        <span v-show="loadingSubmit" class="spinner-border spinner-border-sm"></span>
                        <span>Đăng nhập</span>
                    </Button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useStore();

const loadingSubmit = ref(false);
const errorMessage = ref('');
const inputValue = reactive({
    username: '',
    password: '',
});

const resetErrorMessage = () => {
    errorMessage.value = '';
}

const submitForm = () => {
    const isAllEmpty = Object.values(inputValue).some(value => value === '');
    errorMessage.value = '';
    if (isAllEmpty) {
        errorMessage.value = 'Tất cả các trường là bắt buộc';
        return;
    }

    loadingSubmit.value = true
    store
        .dispatch('auth/login', inputValue)
        .then((res) => {
            if (res.data.message) {
                errorMessage.value = res.data.message;
                return;
            }
            localStorage.setItem('user', JSON.stringify(res.data));
            router.push('/');
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
            loadingSubmit.value = false;
        });
}
</script>

<style scoped>
.card {
    width: 25rem;
    margin: 0 auto;
}
</style>