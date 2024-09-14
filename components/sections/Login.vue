<script setup>
import { login, register } from '~/utils/session-auth';

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
            errorMsg.value = '登录成功，跳转中...';
        } else {
            errorMsg.value = res.message;
        }
    }).catch((error) => {
        errorMsg.value = '登录失败：' + error.message;
    });
}

function handleRegister() {
    register(username.value, password.value).then((res) => {
        if (res.success) {
            login(username.value, password.value).then(() => {
                router.push({
                    name: 'console',
                    query: {
                        ...route.query,
                    },
                })
            });
        } else {
            errorMsg.value = res.message;
        }
    }).catch((error) => {
        errorMsg.value = '注册失败：' + error.message;
    })
}

</script>
<template>
    <section class="my20 w-auto b-amber b-s-style-solid">
        <form @submit.prevent="handleSubmit" text="lg neutral-7 dark:neutral-3"
            class="w-auto max-w-sm mx-auto p-6 border border-gray-300 rounded-lg shadow-lg">
            <div class="mb-4">
                <label for="username">Username</label>
                <input v-model="username" type="text" id="username"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required>
            </div>
            <div class="mb-6">
                <label for="password">Password</label>
                <input v-model="password" type="password" id="password"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    required>
            </div>
            <div flx flex-row>
                <div class="flex items-center gap-3">
                    <button class="btn btn-primary">
                        Sign In    
                    </button>
                    <a @click.prevent="handleRegister" class="link link-primary">Register</a>
                </div>
                <div class="flex items-center gap-3 link link-primary">
                    <nuxt-link to="/forgot-password" >Forgot Password</nuxt-link>
                </div>
                <!-- login error message -->
                <div class="text-red-500 text-xs italic">{{ errorMsg }}</div>
            </div>
        </form>
    </section>
</template>