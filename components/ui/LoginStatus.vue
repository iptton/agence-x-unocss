<template>
  <client-only>
    <span v-if="isLogged" to="/console" px6 h12 rd-full relative text-primary>
      <nuxt-link to="/console" mr-2>
        Welcome! {{ username }}
      </nuxt-link>
      <span class="btn btn-primary btn-outline" @click="logout">Log Out</span>
    </span>
    <nuxt-link v-else to="/login">
      <span class="btn btn-primary rounded">
        <span class="text-primary-content">Sign In</span>
      </span>
    </nuxt-link>
  </client-only>
</template>

<script setup lang="ts">
import { useLogged } from '~/utils/session-auth';
let { isLogged, username } = useLogged();

function logout() {
  fetch('/api/logout').then(() => {
    useRouter().replace('/');
  });
}
</script>
