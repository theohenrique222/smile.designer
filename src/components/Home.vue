<template>
  <section id="Home" class="w-full h-[690px] bg-no-repeat bg-center bg-cover">
    <div class="lg:flex justify-between mx-auto max-w-5xl items-center pt-20 ">
     
      <div class="lg:hidden text-center">
          <h1 class="text-white font-extrabold m-0 text-[2.5rem]">{{ name }}</h1>
          <p class="text-white font-light uppercase ">{{ secondName }}</p>
      </div>
      
      <div class="lg:w-full w-10/12 m-auto">
          <h1 class="text-white uppercase font-bold text-4xl text-center">{{ title }}</h1>
          <h3 class="text-white uppercase font-semibold text-2xl text-center lg:pb-0 pb-2">{{ license }}</h3>
          <p class="text-white text-justify font-light sm:text-sm lg:text-xl">{{ description }}</p>
      </div>
      <div class="lg:flex lg:flex-col hidden text-end w-full pt-5">
          <h1 class="text-white font-extrabold m-0 text-4xl">{{ name }}</h1>
          <p class="text-white font-light uppercase px-20">{{ secondName }}</p>
        </div>
      </div>
      <div class="flex pt-5">
        <Button href="/contact" class="text-xl text-white mx-auto">
          Fale conosco
        </Button>
      </div>
  </section>
</template>

<script>
import Button from './Button.vue';

export default {
  components: {
    Button
  },
  data() {
    return {
      name: "Hudson Azevedo",
      secondName: "Smile Designer",
      title: "Técnico em protese dentaria",
      license: "CRO | RN-215",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, tempora. Adipisci ab quam id assumenda perferendis minus beatae! Doloribus cum, neque tempore hic ut enim debitis itaque quasi similique totam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis pariatur laborum reiciendis minima fuga? Doloribus omnis in, quam eaque labore voluptatem, quod mollitia, iste laboriosam nobis ut iure? Nesciunt, itaque! Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    }
  }
}
</script>
<style>
  #Home {
    background-image: url(../assets/bg-lg.png);
  }
  @media (max-width: 640px) {
    #Home {
      background-image: url(../assets/bg-sm.png);
    }
  }
</style>