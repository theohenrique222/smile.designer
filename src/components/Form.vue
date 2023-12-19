<template>
  <form action="https://formsubmit.co/theodoro222@hotmail.com" method="POST">
              <div class="relative mb-6">
                <label
                  class="flex text-neutral-50 pb-1">Nome Completo:
                </label>
                <input 
                  class="min-h-[auto] w-full rounded bg-transparent border border-white/40 text-white py-[0.32rem] px-3 leading-[1.6] outline-none"
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
                  class="flex text-neutral-50 pb-1">Mensagem:
                </label>
                <textarea
                  class="min-h-[auto] w-full rounded bg-transparent border placeholder:text-neutral-300 border-white/40 text-white py-[0.32rem] px-3 leading-[1.6] outline-none" rows="3" placeholder="Digite sua menssagem:" name="Mensagem"></textarea>
              </div>
              
              
              <input type="hidden" name="_subject" value="MENSAGEM DO SITE!">
              <input type="text" name="_honey" style="display: none;">
              <input type="hidden" name="_captcha" value="false">
              <input type="hidden" name="_next" value="<Alert/>">
            </form>
</template>

<script>
export default {

}
</script>

<style>

</style>