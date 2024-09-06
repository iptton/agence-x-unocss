<template>
  <client-only>
    <div lg-min-w-max flex items-center sm-w-max w-full pb="6 lg:0" px="6 lg:0">
      <nuxt-link v-if="loggedIn" to="/console" flex justify-center items-center w-full sm-w-max px6 h12 bg-emerald-600
                 rd-full
                 relative overflow-hidden border="~ transparent hover:[emerald7]" duration-300 ease-linear
                 un-after="absolute content-empty inset-x-0 aspect-square scale-0 op-70 origin-center duration-300 ease-linear rd-full top-0 left-0 bg-[emerald7]">
                            <span relative z-10 text-white>
                                Welcome!
                            </span>
      </nuxt-link>
      <nuxt-link v-else to="/login" flex justify-center items-center w-full sm-w-max px6 h12 bg-emerald-600 rd-full
                 relative overflow-hidden border="~ transparent hover:[emerald7]" duration-300 ease-linear
                 un-after="absolute content-empty inset-x-0 aspect-square scale-0 op-70 origin-center duration-300 ease-linear rd-full top-0 left-0 bg-[emerald7]">
                            <span relative z-10 text-white>
                                Login/Register
                            </span>
      </nuxt-link>
    </div>
  </client-only>
</template>

<script setup lang="ts">
import { containsLoginCookie, verifyLogined } from '~/utils/session-auth';
let loggedIn = ref(containsLoginCookie());
onMounted(() => {
    let loggedIn = ref(containsLoginCookie());
    if (loggedIn) {
      verifyLogined().catch(() => {
        loggedIn.value = false;
      });
    }
});

</script>
