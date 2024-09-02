<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <NavItem href="/" :isActive="true">Trang chủ</NavItem>
                <NavItem href="/users">Quản lý users</NavItem>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="/login">Đăng nhập</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import NavItem from '../molecules/NavItem.vue'
</script>
