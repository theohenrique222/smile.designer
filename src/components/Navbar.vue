<template>
    <div class="bg-black/90 border-b-2 z-50 border-gray-300 items-center fixed w-full text-gray-100 shadow-2xl">
        <div class="flex justify-between lg:max-w-6xl max-w-sm m-auto">
            <div class="flex items-center cursor-pointer">
                <span class="mr-3">
                    <img src="../assets/logo3.png" alt="logo" height="15px" width="35px">
                </span>
                <h1 class="text-xl">Designer</h1>
            </div>
            <span @click="MenuOpen()" class="absolute flex right-3 top-2 md:hidden cursor-pointer text-4xl">
                <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
            </span>
            <ul class="md:flex items-center md:px-0 md:pb-0 pb-10 lg:bg-transparent bg-black/90 gap-2 md:static absolute md:w-auto w-full top-14 duration-700 ease-in" :class="[open ? 'left-0' : 'left-[100%]']"> 
                <li class="lg:my-0 my-3 m-auto text-center lg:border-0 border-b-2 border-gray-500" v-for="link in Links" :key="link">
                    <a :href="link.link" class="text-base hover:border-b-4 border-rose-500 transition-all p-3">{{ link.name }}</a>
                </li>
                <Button class="text-center">
                    Fale Conosco
                </Button>
            </ul>
        </div>
    </div>
  </template>

<script>
import { ref } from '@vue/reactivity';
import Button from './Button.vue';
export default {
    components:{
        Button
    },
        setup(){
            let open = ref(false)
            let Links = [
                {name: "Início", link: "#Home"},
                {name: "Sobre", link: "#About"},
                {name: "Trabalhos", link: "#Portfolio"},
                {name: "Testemunhos", link: "#Testemunials"},
            ]

            function MenuOpen(){
                open.value = !open.value
            }

            return{Links,open,MenuOpen}
        }
}
</script>

<style>

</style>