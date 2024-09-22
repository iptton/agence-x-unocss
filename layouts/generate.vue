<template>
    <div class="min-h-screen flex flex-col bg-[url('bg.webp')] bg-cover dark:bg-[url('bg.dark.webp')]">
        <ElementNavbar />
        <div class="flex-grow" p-t-20>
            <slot />
        </div>
        <ElementFooter />
    </div>
</template>

<style>
/* @import '@unocss/reset/tailwind.css';

body {
    @apply bg-neutral50 dark-bg-neutral950 font-dms
} */
</style>