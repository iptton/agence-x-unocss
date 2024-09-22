<template>
    <div class="min-h-screen flex flex-col dark:bg-[url('bg.dark.webp')] bg-cover">
        <ElementNavbar />
        <div class="flex-grow">
            <slot />
        </div>
        <ElementFooter />
    </div>
</template>

<style>
@import '@unocss/reset/tailwind.css';

body {
    @apply bg-neutral50 dark-bg-neutral950 font-dms
}
</style>