import Vue from 'vue'

import antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import Button1 from 'ant-design-vue/lib/button';
import Layout from 'ant-design-vue/lib/layout'

Vue.component(Button1.name, Button1);
Vue.component(Layout.name, Layout);

Vue.use(antd);