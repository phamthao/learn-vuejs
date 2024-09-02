<template>
    <MainLayout>
        <Headline>Quản lý users</Headline>
        <Button class="btn-primary mb-1 float-right">Thêm</Button>
        <Table :headers="tableHeaders" :rows="tableRows" :actions="tableActions" />
        <Pagination :totalPages="5" :currentPage="2" />
    </MainLayout>
</template>

<script setup>
import MainLayout from '../../templates/MainLayout.vue';

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
            console.log('Edit:', row)
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

</script>
