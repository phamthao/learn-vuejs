<template>
    <MainLayout>
        <Headline>{{ pageTitle }}</Headline>
        <router-link to="/users/add" class="btn btn-primary mb-1 float-right">Thêm</router-link>
        <p v-if="loading" class="clearfix">Loading...</p>
        <Table v-if="!loading" :headers="tableHeaders" :rows="tableRows" :actions="tableActions" />
        <Pagination :totalPages="totalPages" :currentPage="currentPage" @click="changePage" />
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
