<script setup>
const footerLinks = [
    /*
    {
        id: 1,
        title: "Navigation",
        items: [
            {
                id: 1,
                label: 'Item',
                link: '#'
            },
        ]
    },
    */
]
</script>
<template>
    <footer pt="16 md:20" bg="neutral-1 dark:neutral-9">
        <div px="5 sm:10 md:12 lg:5" class="max-w-7xl mx-auto">
            <div text="neutral-7 dark:neutral-3" border-b="~ neutral-2 dark:neutral-8"
                class="w-full grid grid-cols-2 lg-grid-cols-4 gap-8 pb4">
                <div class="flex">
                    <nuxt-link to="#">
                        <span
                            class="text-transparent bg-clip-text bg-gradient-to-tr from-emerald-8 to-teal-4 font-bold text-2xl">U</span>
                        AIVideoTranslate.
                    </nuxt-link>
                </div>
                <div class="flex items-center space-x-2">
                    <span i-carbon-location flex text-xl></span>
                    <span>Bala bala bala</span>
                </div>
                <div class="flex items-center space-x-2">
                    <span i-carbon-phone flex text-xl></span>
                    <span>+243 456 ...</span>
                </div>
                <div class="flex items-center space-x-2">
                    <span i-carbon-email flex text-2xl></span>
                    <span>info@vt.ai</span>
                </div>
            </div>

            <nav v-if="footerLinks.length > 0" text="neutral-7 dark:neutral-3" class="grid grid-cols-2 md-grid-cols-3 lg-grid-cols-4 gap-y-10 gap-8 py-10">
                <div v-for="footerItem in footerLinks" :key="footerItem.id" class="space-y-5">
                    <h1 text="lg neutral-9 dark:neutral-1" class="font-semibold">
                        {{ footerItem.title }}
                    </h1>
                    <ul class="space-y-3">
                        <li v-for="item in footerItem.items" :key="item.id">
                            <nuxt-link :to="item.link" class="hover-text-emerald-6 dark-hover-text-emerald-5 duration-200">
                                {{ item.label }}
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div border-t="~ neutral-2 dark:neutral-8" un-text="neutral-7 dark:neutral-3"
                class="w-full flex flex-col md-flex-row gap-4 items-center sm-justify-between py3">
                <div text="center sm:left" class="flex sm-min-w-max">
                    <p> &copy; 2024 AIVideoTranslate. All right reserved </p>
                </div>
<!--                <div class="flex justify-center sm-justify-end w-full gap-3">-->
<!--                    <nuxt-link to="#" aria-label="social link">-->
<!--                        <span i-carbon-logo-facebook text-2xl flex></span>-->
<!--                    </nuxt-link>-->
<!--                    <nuxt-link to="#" aria-label="social link">-->
<!--                        <span i-carbon-logo-linkedin text-2xl flex></span>-->
<!--                    </nuxt-link>-->
<!--                    <nuxt-link to="#" aria-label="social link">-->
<!--                        <span i-carbon-logo-twitter text-2xl flex></span>-->
<!--                    </nuxt-link>-->
<!--                    <nuxt-link to="#" aria-label="social link">-->
<!--                        <span i-carbon-logo-instagram text-2xl flex></span>-->
<!--                    </nuxt-link>-->
<!--                </div>-->
            </div>
        </div>
    </footer>
</template>
