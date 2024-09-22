<template>
    <div relative w-full h-full>
        <div class="bg-cover bg-[url(/bg.dark.webp)] absolute z-0 w-full top-0 right-0 left-0 h-[400px]"></div>
        <div class="relative min-h-screen flex flex-col z-100">
            <ElementNavbar />
            <div class="flex-grow">
                <slot />
            </div>
            <ElementFooter />
        </div>
    </div>
</template>

<style>
@import '@unocss/reset/tailwind.css';

body {
    @apply bg-neutral50 dark-bg-neutral950 font-dms
}
</style>