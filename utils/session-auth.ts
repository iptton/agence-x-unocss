import { useCookies } from "@vueuse/integrations";

// const host = 'https://vt2.pan2017.cn'
const host = '';

export function login(username: string, password: string): Promise<{success: string, message: string}> {
    // 向 /login 接口发送 POST 请求，body 为 { username, password }
    // 如果返回 200，表示登录成功，返回 true
    // 如果返回 401，表示登录失败，返回 false
    return fetch(`${host}/api/login`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "username": username,
            "password": password,
        }),
    }).then((res) => res.json())
        .then((data) => {
            return data
        })
        .catch((err) => {
            console.error(err)
            return false;
        });
}

export function logout(): Promise<boolean> {
    // 向 /logout 接口发送 POST 请求
    // 如果返回 200，表示登出成功，返回 true
    // 如果返回 401，表示登出失败，返回 false
    return fetch(`${host}/api/logout`, {
        method: 'POST',
    }).then(res => {
        return res.status === 200;
    });
}

export function register(username: string, password: string): Promise<boolean> {
    // 向 /register 接口发送 POST 请求，body 为 { username, password }
    // 如果返回 200，表示注册成功，返回 true
    // 如果返回 401，表示注册失败，返回 false
    return fetch(`${host}/api/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            password,
        }),
    }).then(res => {
        return res.json()
    })
}

export function containsLoginCookie(): boolean {
    const username = useCookie('username')
    const session = useCookie('session')
    console.info('contains cookie? ',username.value, session.value)
    return !!username.value && !!session.value
}

export function useLogged() {
    const username = useCookie('username');
    const session = useCookie('session');
    const isLogged = ref(!!username.value && !!session.value);

    // Watch for changes in cookies and update the logged-in status
    watch([username, session], ([newUsername, newSession]) => {
        isLogged.value = !!newUsername && !!newSession;
    });

    return {
        isLogged,
    };
}

export async function verifyLogined(): Promise<boolean> {
    return fetch(`${host}/api/verify`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(res => {
        return res.status === 200;
    });
}
