<template>
<div class="pt-5 pb-5">
  <!-- Section: Design Block -->
  <section class="lg:max-w-6xl max-w-sm m-auto text-center">
    <h2 class="mb-6 pl-6 text-3xl font-bold">Duvidas Frequentes</h2>
    <div id="accordionFlushExample">
      
      <div class="rounded-none border border-t-0 border-l-0 border-r-0 border-neutral-200">
        <h2 class="mb-0" id="flush-headingOne">
          <button
            class="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-gray-900 [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-second-bordo"
            type="button" data-te-collapse-init data-te-target="#flush-collapseOne" aria-expanded="false"
            aria-controls="flush-collapseOne">
            {{ title1 }}
            <span
              class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
              </svg>
            </span>
          </button>
        </h2>
        <div id="flush-collapseOne" class="!visible border-0" data-te-collapse-item data-te-collapse-show
          aria-labelledby="flush-headingOne" data-te-parent="#accordionFlushExample">
          <div class="py-4 px-5 text-gray-500 dark:text-gray-900">
            <p>
              {{ description1 }}
            </p>
          </div>
        </div>
      </div>

      <div class="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200">
        <h2 class="mb-0" id="flush-headingTwo">
          <button
            class="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-second-bordo"
            type="button" data-te-collapse-init data-te-collapse-collapsed data-te-target="#flush-collapseTwo"
            aria-expanded="false" aria-controls="flush-collapseTwo">
            {{ title2 }}
            <span
              class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
              </svg>
            </span>
          </button>
        </h2>
        <div id="flush-collapseTwo" class="!visible hidden border-0" data-te-collapse-item
          aria-labelledby="flush-headingTwo" data-te-parent="#accordionFlushExample">
          <div class="py-4 px-5 text-neutral-500 dark:text-gray-900">
            <p>
              {{ description2 }}
            </p>
          </div>
        </div>
      </div>

      <div class="rounded-none border border-l-0 border-r-0 border-b-0 border-t-0 border-neutral-200">
        <h2 class="mb-0" id="flush-headingThree">
          <button
            class="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-second-bordo"
            type="button" data-te-collapse-init data-te-collapse-collapsed data-te-target="#flush-collapseThree"
            aria-expanded="false" aria-controls="flush-collapseThree">
            {{ title3 }}
            <span
              class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
              </svg>
            </span>
          </button>
        </h2>
        <div id="flush-collapseThree" class="!visible hidden rounded-b-lg" data-te-collapse-item
          aria-labelledby="flush-headingThree" data-te-parent="#accordionFlushExample">
          <div class="py-4 px-5 text-neutral-500 dark:text-gray-900">
            <p>{{ description3 }}</p>
          </div>
        </div>
      </div>
      
    </div>
  </section>
  <!-- Section: Design Block -->
</div>
<!-- Container for demo purpose -->
</template>

<script>
export default{
  data() {
    return {
      title1: "Duvida 1",
      description1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eligendi minus maxime, impedit dignissimos quae asperiores aut distinctio nisi perferendis at necessitatibus aliquam dolor odio facere saepe, harum sed. Reiciendis.",
      title2: "Duvida 2",
      description2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eligendi minus maxime, impedit dignissimos quae asperiores aut distinctio nisi perferendis at necessitatibus aliquam dolor odio facere saepe, harum sed. Reiciendis.",
      title3: "Duvida 3",
      description3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eligendi minus maxime, impedit dignissimos quae asperiores aut distinctio nisi perferendis at necessitatibus aliquam dolor odio facere saepe, harum sed. Reiciendis.",
    }
  }
}
</script>

<style>

</style>