<template>
    <div class="flex flex-row items-start justify-left gap-4 flex-wrap">
        <div v-for="task in tasks" class="card bg-base-100 w-96 shadow-xl">
            <div class="flex flex-row">
                <figure class="px-10 pt-10">
                    <video class="rounded-t-lg" :src="`/api/download/${task.originFile}`" />
                </figure>
                <div v-if="!task.completed" class="px-10 pt-10">
                    <span class="loading loading-infinity loading-lg"></span>
                </div>
                <div v-else class="card-body items-center text-center">
                    <video class="rounded-t-lg" :src="task.targetFile" />
                </div>
            </div>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{{ task.name }}</h2>
                <label class="label cursor-pointer">
                    <span class="label-text">Completed </span>
                    <input type="checkbox disabled" class="toggle toggle-primary" :checked="task.completed" />
                </label>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps<{ tasks: Task[] }>();
</script>