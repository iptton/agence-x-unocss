<script setup>
import { login } from '~/utils/session-auth';

const username = ref('');
const password = ref('');
const errorMsg = ref('');
const router = useRouter();
const route = useRoute();

function handleSubmit() {
    login(username.value, password.value).then((res) => {
        if (res.success) {
            router.push({
                name: 'console',
                query: {
                    ...route.query,
                },
            })
        } else {
            errorMsg.value = res.message;
        }
    }).catch((error) => {
        errorMsg.value = '登录失败：' + error.message;
    });
}
</script>
<template>
    <section class="my20 w-auto b-amber b-s-style-solid">
        <form @submit.prevent="handleSubmit"
            class="w-auto max-w-sm mx-auto p-6 border border-gray-300 rounded-lg shadow-lg">
            <div class="mb-4">
                <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Username</label>
                <input v-model="username" type="text" id="username"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required>
            </div>
            <div class="mb-6">
                <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <input v-model="password" type="password" id="password"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    required>
            </div>
            <div flx flex-row>
                <div class="flex items-center gap-3">
                    <button bg-green-4
                        class="bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300">Login</button>
                    <nuxt-link to="/register" text-blue hover:text-blue-200>Register</nuxt-link>
                </div>
                <div class="flex items-center gap-3">
                    <nuxt-link to="/forgot-password" text-blue hover:text-blue-200>Forgot Password</nuxt-link>
                </div>
                <!-- login error message -->
                <div class="text-red-500 text-xs italic">{{ errorMsg }}</div>
            </div>
        </form>
    </section>
</template>