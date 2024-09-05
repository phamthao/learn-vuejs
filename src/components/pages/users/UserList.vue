<template>
    <MainLayout>
        <Headline>{{ pageTitle }}</Headline>
        <div class="d-flex justify-content-between mb-1">
            <router-link to="/users/add" class="btn btn-primary">Thêm</router-link>
            <Pagination :totalPages="totalPages" :currentPage="currentPage" @click="changePage" />
        </div>
        <Table :loading="loading" :headers="tableHeaders" :rows="tableRows" :actions="tableActions" />
    </MainLayout>
</template>

<script setup>
import { ref, computed, watchEffect, defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

import MainLayout from '../../templates/MainLayout.vue'

const router = useRouter()
const store = useStore()

const props = defineProps({
    page: { type: [Number, String], default: 1 }
})

const tableRows = ref([])
const totalPages = ref(0)
const loading = ref(true)

const pageTitle = computed(() => router.currentRoute.value.meta.title)
const currentPage = computed(() => props.page)

const tableHeaders = [
    { name: 'id', title: 'ID' },
    { name: 'username', title: 'User name' },
    { name: 'fullname', title: 'Full Name' },
    { name: 'email', title: 'Email' }
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

// Watch effect to fetch data when currentPage changes
watchEffect(() => {
    loading.value = true
    store
        .dispatch('user/getAll', { page: currentPage.value })
        .then(() => {
            tableRows.value = store.getters['user/list']
            totalPages.value = store.getters['user/totalPages']
        })
        .finally(() => {
            loading.value = false
        })
})
</script>
