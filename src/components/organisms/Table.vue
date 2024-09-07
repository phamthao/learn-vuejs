<template>
    <table class="table table-bordered">
        <thead class="thead-dark">
            <tr>
                <th v-for="header in headers" :key="header.name">{{ header.title }}</th>
                <th v-show="hasActions">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="loading">
                <td :colspan="colspan" class="text-center">Loading..</td>
            </tr>
            <tr v-else-if="rows.length === 0">
                <td :colspan="colspan" class="text-center">Không có dữ liệu</td>
            </tr>
            <tr v-else="rows.length > 0" v-for="row in rows" :key="row.id" :ref="(el) => (itemRefs[row.id] = el)">
                <td v-for="header in headers" :key="header.name">{{ row[header.name] }}</td>
                <td v-if="hasActions">
                    <div class="btn-group float-right" role="group">
                        <Button v-for="action in actions" :key="action.type" type="button" :class="action.class" @click="action.handler({...row, itemRef: itemRefs[row.id]})">{{ action.label }}</Button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { ref, defineProps, computed } from 'vue'

const props = defineProps({
    loading: {
        type: Boolean,
        default: true
    },
    headers: {
        type: Array,
        required: true
    },
    rows: {
        type: Array,
        default: () => []
    },
    actions: {
        type: Array,
        default: () => []
    }
})

const itemRefs = ref([]);

const hasActions = computed(() => props.actions.length > 0)
const colspan = computed(() => props.headers.length + (hasActions.value ? 1 : 0))
</script>