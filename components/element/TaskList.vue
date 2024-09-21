<template>
    <div class="flex flex-row items-start justify-left gap-4 flex-wrap">
        <div v-for="task in tasks" class="card bg-base-100 w-96 shadow-xl">
            <div class="flex flex-row">
                <figure class="px-10 pt-10">
                    <video class="rounded-t-lg" :src="`/api/download/${task.originFile}`" />
                </figure>
                <div v-if="task.completed" class="card-body items-center text-center">
                    <video class="rounded-t-lg" :src="task.downloadUrl" />
                </div>
            </div>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{{ task.name }}
                    <span v-if="!task.completed" class="loading loading-infinity loading-lg"></span>
                </h2>
            </div>
        </div>

        <div v-if="tasks.length === 0" class="card bg-base-100 w-96 shadow-xl">
            <div class="card-body items-center text-center">
                <h2 class="card-title">No tasks</h2>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps<{ tasks: Task[] }>();

function checkTaskStatus(task: Task) {
    fetch(`/api/tasks/status/${task.sessionId}`)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                task.completed = true;
                task.downloadUrl = data.url;
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
</script>