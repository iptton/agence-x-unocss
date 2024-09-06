import { useCookies } from "@vueuse/integrations";

const host = ''

export function login(username: string, password: string): Promise<boolean> {
    // 向 /login 接口发送 POST 请求，body 为 { username, password }
    // 如果返回 200，表示登录成功，返回 true
    // 如果返回 401，表示登录失败，返回 false
    return fetch(`${host}/api/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            password,
        }),
    }).then(res => {
        return res.status === 200;
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
        return res.status === 200;
    });
}

export function containsLoginCookie(): boolean {
    const username = useCookie('username')
    const session = useCookie('session')
    return !!username.value && !!session.value
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