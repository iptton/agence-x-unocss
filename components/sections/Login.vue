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
            errorMsg.value = '登录成功，跳转中...';
            return router.replace({
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
                <label class="input input-bordered flex items-center gap-2">
                    Username
                    <input data-testid="username" v-model="username" type="text" id="username"
                        class="grow" required>
                </label>
            </div>
            <div class="mb-6">
                <label class="input input-bordered flex items-center gap-2">
                    Password
                    <input data-testid="password" v-model="password" id="password" type="password" class="grow"
                        placeholder="" />
                </label>
            </div>
            <div flx flex-row>
                <div class="flex items-center gap-3">
                    <button id="SignIn" class="btn btn-primary">
                        Sign In
                    </button>
                    <a @click.prevent="handleRegister" class="link link-primary">Register</a>
                </div>
                <div class="flex items-center gap-3 link link-primary">
                    <nuxt-link to="/forgot-password">Forgot Password</nuxt-link>
                </div>
                <!-- login error message -->
                <div class="text-red-500 text-xs italic">{{ errorMsg }}</div>
            </div>
        </form>
    </section>
</template>