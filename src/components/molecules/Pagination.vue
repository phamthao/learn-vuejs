<template>
    <nav v-show="totalPages > 1">
        <ul class="pagination justify-content-end">
            <li v-for="page in pages" :key="page" :class="['page-item', { active: page === currentPage }]"><a class="page-link" href="#">{{ page }}</a></li>
        </ul>
    </nav>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
    totalPages: {
        type: Number,
        default: 1
    },
    currentPage: {
        type: Number,
        default: 1
    }
})

const pages = computed(() => {
    const pagesArray = []
    for (let i = 1; i <= props.totalPages; i++) {
        pagesArray.push(i)
    }
    return pagesArray
})

</script>