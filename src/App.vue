<template>
    <Navbar />
    <div class="container-fluid">
        <HomePage />
        <LoginPage />
        <UserList />
        <UserSetting />
    </div>
</template>

<script setup>

import Navbar from './components/organisms/Navbar.vue'
import LoginPage from './components/pages/LoginPage.vue';
import HomePage from './components/pages/HomePage.vue';
import UserList from './components/pages/users/UserList.vue'
import UserSetting from './components/pages/users/UserSetting.vue'

</script>

<style scoped></style>
