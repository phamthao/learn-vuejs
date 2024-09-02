<template>
    <Headline>{{ pageTitle }}</Headline>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-md-6">
                    <FormInputGroup label="Username" name="username" v-model="inputValue" />
                </div>
                <div class="col-md-6">
                    <FormInputGroup label="Password" name="password" v-model="inputValue" />
                </div>
                <div class="col-md-6">
                    <FormInputGroup label="Fullname" name="fullname" v-model="inputValue" />
                </div>
                <div class="col-md-6">
                    <FormInputGroup label="Email" name="email" v-model="inputValue" />
                </div>
            </div>
            <router-link to="/users" class="btn btn-secondary float-right">Thoát</router-link>
            <Button class="btn-primary float-right mr-1">Lưu</Button>
        </form>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const pageTitle = computed(() => router.currentRoute.value.meta.title);

const inputValue = ref('');

</script>