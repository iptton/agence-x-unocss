<template>
  <client-only>
    <nuxt-link v-if="isLogged" to="/console" flex justify-center items-center w-full sm-w-max px6 h12 bg-emerald-600
      rd-full relative overflow-hidden border="~ transparent hover:[emerald7]" duration-300 ease-linear
      un-after="absolute content-empty inset-x-0 aspect-square scale-0 op-70 origin-center duration-300 ease-linear rd-full top-0 left-0 bg-[emerald7]">
      <span relative z-10 text-white>
        Welcome!
      </span>
      <span class="btn b-t-secondary" @click="logout">Log Out</span>
    </nuxt-link>
    <nuxt-link v-else to="/login">
      <span class="btn btn-primary rounded">
        <span class="text-primary-content">Sign In</span>
      </span>
    </nuxt-link>
  </client-only>
</template>

<script setup lang="ts">
import { useLogged } from '~/utils/session-auth';
let { isLogged } = useLogged();

function logout() {
  fetch('/api/logout').then(() => {
    useRouter().replace('/');
  });
}
</script>
