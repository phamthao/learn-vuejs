<template>
    <nav v-show="totalPages > 1">
        <ul class="pagination mb-0">
            <li v-for="page in pages" :key="page" :class="['page-item', { active: page == currentPage }]" @click="changePage(page)">
                <a class="page-link" role="button" href="#">{{ page }}</a>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'

const props = defineProps({
    totalPages: {
        type: Number,
        default: 1
    },
    currentPage: {
        type: [Number, String],
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

const emit = defineEmits(["click"]);

const changePage = (page) => {
  emit("click", page);
};

</script>