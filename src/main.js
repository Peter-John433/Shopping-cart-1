import './assets/main.css'
import 'boxicons'
import '@splidejs/vue-splide/css/sea-green';
import 'animate.css';


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import VueSplide from '@splidejs/vue-splide';

const app = createApp(App)

app.use(createPinia())
app.use( VueSplide );
app.use(router)

app.mount('#app')


    setInterval(
        function () {
        const changeColor = Math.floor(Math.random() * 16777215 ).toString(16);
        const myChange = document.querySelector('.changeColors');
        myChange.style.color = "#"+changeColor;
    },1000);

    setInterval(
        function () {
        const changeColor = Math.floor(Math.random() * 16777215 ).toString(16);
        const myChange = document.querySelector('.changeColors1');
        myChange.style.color = "#"+changeColor;
    },1000);

    setInterval(
        function () {
        const changeColor = Math.floor(Math.random() * 16777215 ).toString(16);
        const myChange = document.querySelector('.changeColors2');
        myChange.style.color = "#"+changeColor;
    },1000);

    setInterval(
        function () {
        const changeColor = Math.floor(Math.random() * 16777215 ).toString(16);
        const myChange = document.querySelector('.changeColors3');
        myChange.style.color = "#"+changeColor;
    },1000);


