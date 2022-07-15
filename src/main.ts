import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'
import ChildView from "@/components/ChildView.vue";
import { Message } from 'view-ui-plus'
const app = createApp(App)
app.provide('$Message', Message);

app.config.globalProperties.$tips = Message;

app.use(createPinia())
app.use(router).use(ViewUIPlus)
app.component('ChildView', ChildView);
app.mount('#app')



