<template>
    <MainLayout>
        <Headline>{{ pageTitle }}</Headline>
        <router-link to="/users/add" class="btn btn-primary mb-1 float-right">Thêm</router-link>
        <Table :headers="tableHeaders" :rows="tableRows" :actions="tableActions" />
        <Pagination :totalPages="5" :currentPage="currentPage" @click="changePage" />
    </MainLayout>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import { useRouter } from 'vue-router'

import MainLayout from '../../templates/MainLayout.vue';

const router = useRouter()

const props = defineProps({
    page: {
        type: [Number, String],
        default: 1
    },
})

const pageTitle = computed(() => router.currentRoute.value.meta.title);

const currentPage = computed(() => props.page)

const tableHeaders = [
    { name: 'id', title: 'ID' },
    { name: 'username', title: 'User name' },
    { name: 'fullname', title: 'Full Name' },
    { name: 'email', title: 'Email' }
]

const tableRows = [
    { id: 1, username: 'user1', fullname: 'User One', email: 'user1@example.com' },
    { id: 2, username: 'user2', fullname: 'User Two', email: 'user2@example.com' },
    { id: 3, username: 'user3', fullname: 'User Three', email: 'user3@example.com' }
]

const tableActions = [
    {
        type: 'edit',
        label: 'Sửa',
        class: 'btn-primary',
        handler: (row) => {
            router.push(`/users/${row.id}/edit`)
        }
    },
    {
        type: 'delete',
        label: 'Xóa',
        class: 'btn-danger',
        handler: (row) => {
            console.log('Delete:', row)
        }
    }
]

const changePage = (page) => {
    router.push({ path: '/users', query: { page: page } })
}

</script>
