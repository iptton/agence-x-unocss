<template>
  <main class="mt-8 flex-1 flex flex-col items-center justify-center h-full">
    <form @submit.prevent="handleSubmit" class="w-full max-w-sm">
      <div class="mb-4">
        <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Username</label>
        <input v-model="username" type="text" id="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
      </div>
      <div class="mb-6">
        <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
        <input v-model="password" type="password" id="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" required>
      </div>
      <div class="flex items-center justify-between">
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login.</button>
      </div>
    </form>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { processVideo } from '~/lib/hf';
import { login } from '~/utils/session-auth';

const username = ref('');
const password = ref('');

function handleSubmit() {

  // processVideo().catch(console.error);
  // console.log('Username:', username.value);
  // console.log('Password:', password.value);
  // // Add your login logic here
  // fetch('http://fromhere.one/api/signup', {
  //   method: 'POST',
  //   mode: 'cors',
  //   headers: {
  //     'Content-Type': 'application/json;charset=UTF-8',
  //     'Accept': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     username: username.value,
  //     password: password.value,
  //   }),
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log('Success:', data);
  //   })
  //   .catch((error) => {
  //     console.error('Error:', error);
  //   });
  login(username.value, password.value).then(() => {
    console.log('Login successful');
  }).catch((error) => {
    console.error('Login failed:', error);
  });
}
</script>

<style scoped>
/* Add any additional styles here */
</style>
