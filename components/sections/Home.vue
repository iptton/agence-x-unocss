<template>
    <div class="hero bg-base-200 min-h-screen">
        <div px="5 sm:10 md:12 lg:5" mx-auto max-w-7xl w-full flex flex-col lg-flex-row gap-10
            lg-gap-12>
            <div relative flex flex-col items-center text-center lg-text-left lg-py-7 xl-py-8 lg-items-start
                lg-max-w-none max-w-3xl mx-auto lg-mx-0 lg-flex-1 class="lg-w-1/2">

                <h1 text="3xl/tight sm:4xl/tight md:5xl/tight xl:6xl/tight neutral-8" font-bold>
                    Effortless video voice translations, powered by <span
                        class="text-transparent bg-clip-text bg-gradient-to-br from-teal-6 from-20% via-emerald-600 via-30% to-green-6">AI</span>
                </h1>
                <p mt-8 text="neutral-7 dark:neutral-3">
                    Experience seamless translations with advanced AI technology, ensuring accuracy.
                </p>
                <div class="mt-8 flex justify-center w-full gap-3">
                    <button aria-label="Try Now" shadow="lg shadow-neutral-2/60 dark:none" class="outline-none flex justify-center items-center sm-w-max min-w-max px6 h12 bg-emerald-6 rd-full relative
                                overflow-hidden duration-300 ease-linear">
                        <span class="relative z20 text-white">
                            Try Now
                        </span>
                    </button>
                    <button aria-label="Try Now" shadow="lg shadow-neutral-2/60 dark:none" class="outline-none flex justify-center items-center sm-w-max min-w-max px6 h12 bg-white rd-full relative
                                overflow-hidden duration-300 ease-linear border-emeral">
                        <span class="relative z20 text-emeral-6">
                            See Demo
                        </span>
                    </button>
                </div>
            </div>

            <div flex flex-1 lg-h-auto relative lg-max-w-none mx-auto max-w-3xl class="lg-w-1/2">
                <video controls autoplay loop muted playsinline class="lg-max-h-none max-h-96"
                    lg="absolute w-full lg-h-full" src="https://p.cdn.izhaoli.cn/gc/web/index2024/fy.mp4"></video>
            </div>
        </div>
    </div>
</template>