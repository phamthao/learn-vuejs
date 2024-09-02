import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import Button from './components/atoms/Button.vue'
import Input from './components/atoms/Input.vue'
import Headline from './components/molecules/Headline.vue'
import Alert from './components/molecules/Alert.vue'
import FormInputGroup from './components/molecules/FormInputGroup.vue'
import Table from './components/organisms/Table.vue'
import Pagination from './components/molecules/Pagination.vue'

import router from "./router";

const app = createApp(App)

app.use(router)

app.component('Button', Button)
    .component('Input', Input)
    .component('Headline', Headline)
    .component('FormInputGroup', FormInputGroup)
    .component('Table', Table)
    .component('Pagination', Pagination)
    .component('Alert', Alert)

app.mount('#app')
