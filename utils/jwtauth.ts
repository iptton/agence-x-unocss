// utils/auth.ts
import { useStorage, useFetch } from '@vueuse/core';


/**
 * 检查 cookies 中是否存在指定字段
 * @param {string} fieldName - 要检查的字段名
 * @returns {boolean} - 如果存在返回 true，否则返回 false
 */
function isFieldInCookies(fieldName: string): boolean {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [name] = cookie.split('=').map(c => c.trim());
        if (name === fieldName) {
            return true;
        }
    }
    return false;
}

/**
 * 检查当前 localStorage 中是否存在 jwt 字段及相关的过期信息
 * 如果存在 jwt 字段，但是过期了，也会返回 false
 *
 */
function isJwtValid(): boolean {
    const jwt = useStorage('jwt', null);
    if (!jwt) {
        return false;
    }
    const jwtExpired = useStorage('jwtExpired', null);
    return Date.now() < Number(jwtExpired);
}

/**
 * 检查当前用户是否已经登录，仅以本地数据为准，不会向后台验证
 */
export function isLoggedIn(): boolean {
    return isJwtValid();
}

/**
 * 向远程服务器验证当前本地保存的登录信息是否过期
 */
export async function validateAuth(): Promise<boolean> {
    // 向 /checkLogin 接口发送请求，header 上附加 jwt bear 字段
    // 如果返回 200，表示验证通过，返回 true
    // 如果返回 401，表示验证失败，返回 false
    return useFetch('http://fromhere.one/api/checkLogin', {
        headers: {
            Authorization: `bear ${useStorage('jwt', null)}`
        }
    }).then(res => {
        return res.status === 200;
    });
}
