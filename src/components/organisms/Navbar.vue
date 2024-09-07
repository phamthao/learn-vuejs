<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <NavItem href="/" :isActive="true">Trang chủ</NavItem>
                <NavItem v-if="loggedIn" href="/users">Quản lý users</NavItem>
            </ul>
            <ul class="navbar-nav">
                <NavItem v-if="!loggedIn" href="/login">Đăng nhập</NavItem>
                <NavItem v-if="loggedIn" :href="null" @click.stop="logout">Đăng xuất</NavItem>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import NavItem from '../molecules/NavItem.vue'
import { computed } from 'vue';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useStore()

const loggedIn = computed(() => store.getters['auth/loggedIn'])

const logout = () => {
    store.dispatch('auth/logout')
    router.push('/login');
}

</script>
