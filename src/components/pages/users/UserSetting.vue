<template>
    <Headline>Thêm/Sửa user</Headline>
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
            <Button class="btn-secondary float-right">Thoát</Button>
            <Button class="btn-primary float-right mr-1">Lưu</Button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const inputValue = ref('');

</script>