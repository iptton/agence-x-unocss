<template>
    <div class="min-h-screen flex flex-col">
        <ElementNavbar />
        <slot/>
        <ElementFooter/>
    </div>
</template>

<style>
@import '@unocss/reset/tailwind.css';
body{
    @apply bg-neutral50 dark-bg-neutral950 font-dms
}
</style>