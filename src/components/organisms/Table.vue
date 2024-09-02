<template>
    <table class="table table-bordered">
        <thead class="thead-dark">
            <tr>
                <th v-for="header in headers" :key="header.name">{{ header.title }}</th>
                <th v-show="hasActions">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-show="rows.length === 0">
                <td :colspan="colspan" class="text-center">Không có dữ liệu</td>
            </tr>
            <tr v-show="rows.length > 0" v-for="row in rows" :key="row.id">
                <td v-for="header in headers" :key="header.name">{{ row[header.name] }}</td>
                <td v-show="hasActions">
                    <div class="btn-group float-right" role="group">
                        <Button v-for="action in actions" :key="action.type" type="button" :class="action.class" @click="action.handler(row)">{{ action.label }}</Button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
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

const hasActions = computed(() => props.actions.length > 0)
const colspan = computed(() => props.headers.length + (hasActions.value ? 1 : 0))
</script>