import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

import {
    Modal,
    Ripple,
    Input,
    initTE,
    Collapse,
  } from "tw-elements";
  
  initTE({ Modal, Ripple, Collapse, Input });


