import { setup, createPage, $fetch } from '@nuxt/test-utils/e2e'
import { describe, it, expect } from 'vitest'

describe('login page', async () => {
    await setup({
        host: 'http://localhost:3000',
    })

    it('displays the email and password fields', async () => {
        const page = await createPage('/login')
        expect(await page.getByTestId('username').isVisible()).toBe(true)
        expect(await page.getByTestId('password').isVisible()).toBe(true)
        await page.getByTestId('username').fill('a')
        await page.getByTestId('password').fill('b')
        await page.click('#SignIn')
        await page.waitForURL('**/console')
        expect(page.url()).toBe('http://localhost:3000/console')
        expect(await page.getByTestId('translate').isVisible()).toBe(true)
    })
})
