<template>
  <div id="Contact">
    <section class="mb-32">
      <div id="Form" class="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"></div>
      <div class=" px-6 md:px-12">
        <div
          class="block rounded-lg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-second-bordo/50 dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
          <div class="flex flex-wrap">
            <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
              <form action="https://formsubmit.co/theodoro222@hotmail.com" method="POST">
                <div class="relative mb-6">
                  <label
                    class="flex text-neutral-50 pb-1">Nome Completo:
                  </label>
                  <input 
                    class="min-h-[auto] w-full rounded bg-transparent border placeholder:text-neutral-300 border-white/40 text-white py-[0.32rem] px-3 leading-[1.6] outline-none"
                    type="text" 
                    name="Nome" 
                    placeholder="Digite seu nome completo:"/>
                </div>

                <div class="relative mb-6">
                  <label
                    class="flex text-neutral-50 pb-1">E-mail:
                  </label>
                  <input 
                    class="min-h-[auto] w-full rounded bg-transparent border placeholder:text-neutral-300 border-white/40 text-white py-[0.32rem] px-3 leading-[1.6] outline-none"
                    type="email" 
                    name="E-mail" 
                    placeholder="Digite seu E-mail:"/>
                </div>
                
                <div class="relative mb-6">
                  <label
                    class="flex text-neutral-50 pb-1">Whatsapp:
                  </label>
                  <input 
                    class="min-h-[auto] w-full rounded bg-transparent border placeholder:text-neutral-300 border-white/40 text-white py-[0.32rem] px-3 leading-[1.6] outline-none"
                    type="tel" 
                    name="Whatsapp"
                    maxlength="15" 
                    onkeyup="handlePhone(event)"
                    placeholder="84 99999-9999"/>
                </div>

                <div class="relative mb-6">
                  <label
                    class="flex text-neutral-50 pb-1">Mensagem:
                  </label>
                  <textarea
                    class="min-h-[auto] w-full rounded bg-transparent border placeholder:text-neutral-300 border-white/40 text-white py-[0.32rem] px-3 leading-[1.6] outline-none" rows="3" placeholder="Digite sua menssagem:" name="Mensagem"></textarea>
                </div>
                
                <button type="submit" data-te-ripple-init data-te-ripple-color="light"
                  class="inline-block w-full rounded bg-orange-500 px-6 py-3 text-xs font-medium uppercase leading-normal text-white shadow-2 transition duration-150 ease-in-out hover:bg-rose-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-rose-900 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-rose-800 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0">
                  Enviar
                </button>
                <input type="hidden" name="_subject" value="MENSAGEM DO SITE!">
                <input type="text" name="_honey" style="display: none;">
                <input type="hidden" name="_captcha" value="false">
                <input type="hidden" name="_next" value="<Alert/>">
              </form>
              
            </div>
            <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
              <div class="flex flex-wrap">
                <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                  <div class="flex items-start">
                    <div class="shrink-0">
                      <a href=""><div class="inline-block rounded-md bg-primary-100 p-4 text-primary-bordo">
                        <i class="bi bi-whatsapp text-2xl"></i>
                      </div></a>
                    </div>
                    <div class="ml-6 grow">
                      <p class="mb-2 font-bold dark:text-white">
                        Whatsapp
                      </p>
                      <p class="text-neutral-500 dark:text-neutral-200">
                        +55 (84) 99999-9999
                      </p>
                    </div>
                  </div>
                </div>
                <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                  <div class="flex items-start">
                    <div class="shrink-0">
                      <a href=""><div class="inline-block rounded-md bg-primary-100 p-4 text-primary-bordo">
                        <i class="bi bi-google text-2xl"></i>
                      </div></a>
                    </div>
                    <div class="ml-6 grow">
                      <p class="mb-2 font-bold dark:text-white">
                        E-mail
                      </p>
                      <p class="text-neutral-500 dark:text-neutral-200">
                        email@example.com
                      </p>
                      
                    </div>
                  </div>
                </div>
                <div
                  class="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                  <div class="align-start flex">
                    <div class="shrink-0">
                      <a href=""><div class="inline-block rounded-md bg-primary-100 p-4 text-primary-bordo">
                        <i class="bi bi-instagram text-2xl"></i>
                      </div></a>
                    </div>
                    <div class="ml-6 grow">
                      <p class="mb-2 font-bold dark:text-white">Instagram</p>
                      <p class="text-neutral-500 dark:text-neutral-200">
                        @smiledesigner
                      </p>
                      
                    </div>
                  </div>
                </div>
                <div class="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                  <div class="align-start flex">
                    <div class="shrink-0">
                      <a href=""><div class="inline-block rounded-md bg-primary-100 p-4 text-primary-bordo">
                        <i class="bi bi-linkedin text-2xl"></i>
                      </div></a>
                    </div>
                    <div class="ml-6 grow">
                      <p class="mb-2 font-bold dark:text-white">Linkedin</p>
                      <p class="text-neutral-500 dark:text-neutral-200">
                        smiledesigner@example.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
}
</script>

<style>
#Form {
    background-image: url(../assets/bg-form.png);
  }
</style>
