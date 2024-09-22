<template>
    <div class="container mx-auto p-4 mt-4">
        <h1 class="text-2xl font-bold mb-4">视频翻译（导出或添加字幕）</h1>

        <div class="bg-base-100 shadow-xl rounded-box p-6">
            <h2 class="text-xl font-semibold mb-4">添加视频文件</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="relative border-2 border-dashed border-base-300 rounded-box p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-base-200 transition-colors overflow-hidden"
                    @click="triggerFileInput" @dragover.prevent @drop.prevent="handleFileDrop"
                    :style="videoPreviewStyle">
                    <input type="file" ref="fileInput" class="hidden" @change="handleFileSelect"
                        accept=".mp4,.flv,.3gp,.mov">
                    <video ref="videoRef" class="absolute inset-0 w-full h-full object-contain z-0 bg-gray-50"
                        @loadedmetadata="onVideoLoaded"></video>
                    <div class="absolute inset-0 bg-primary/20 opacity-50 z-9" />
                    <div class="text-center z-10">
                        <div class="text-6xl text-primary mb-4">▶</div>
                        <p class="text-center">点击 / 拖拽 本地视频文件</p>
                        <p class="text-sm text-base-content mt-2">单个文件最多3个小时</p>
                        <p class="text-sm text-base-content">支持格式: .mp4, .flv, .3gp, .mov</p>
                    </div>
                </div>
                <div class="space-y-4">

                    <div class="form-control w-full">
                        <label class="label">
                            <span class="label-text">视频原语言选择</span>
                        </label>
                        <div class="flex space-x-2">
                            <button v-for="lang in originalLanguages" :key="lang" @click="selectOriginalLanguage(lang)"
                                :class="['btn btn-sm', originalLanguage.value == lang.value ? 'btn-primary' : 'btn-outline']">
                                {{ lang.label }}
                            </button>
                        </div>
                    </div>

                    <div class="form-control w-full">
                        <label class="label">
                            <span class="label-text">翻译为</span>
                        </label>
                        <select v-model="targetLanguage" class="select select-bordered">
                            <option v-for="lang in targetLanguages" :key="lang" :value="lang">{{ lang.label }}</option>
                        </select>
                    </div>

                    <div class="form-control w-full">
                        <label class="label">
                            <span class="label-text">区分发言人</span>
                        </label>
                        <div class="flex space-x-2">
                            <button v-for="option in speakerOptions" :key="option" @click="selectSpeakerOption(option)"
                                :class="['btn btn-sm', speakerOption === option ? 'btn-primary' : 'btn-outline']">
                                {{ option }}
                            </button>
                        </div>
                    </div>

                    <button class="btn btn-primary w-full" @click="startConversion">开始转换</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const languageOptions = [
    { value: 'zh', label: '中文' },
    { value: 'en', label: '英文' },
    { value: 'jp', label: '日文' },
]

const fileInput = ref(null);
const selectedFile = ref(null);
const videoRef = ref(null);
const isPlaying = ref(false);
const videoPreviewUrl = ref('');
const originalLanguage = ref(languageOptions[0]);
const originalLanguages = reactive(languageOptions);
const targetLanguage = ref(languageOptions[2]);
const targetLanguages = reactive(languageOptions);
const speakerOption = ref('单人演讲');
const speakerOptions = reactive(['单人演讲', '2人对话', '多人讨论']);
const generateSummary = ref(true);


const isValidFileType = (file) => {
    const validTypes = ['.mp4', '.flv', '.3gp', '.mov'];
    return validTypes.some(type => file.name.toLowerCase().endsWith(type));
};

const startConversion = () => {
    if (!selectedFile.value) {
        alert('请先选择一个视频文件');
        return;
    }
    // Implement conversion logic here
    console.log('Starting conversion with:', {
        file: selectedFile.value,
        originalLanguage: originalLanguage.value.value,
        targetLanguage: targetLanguage.value.value,
        speakerOption: speakerOption.value,
        generateSummary: generateSummary.value
    });
};

const videoPreviewStyle = computed(() => {
    if (videoPreviewUrl.value) {
        return {
            backgroundImage: `url(${videoPreviewUrl.value})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        };
    }
    return {};
});

const triggerFileInput = () => {
    fileInput.value.click();
};

const handleFileSelect = (event) => {
    const file = event.target.files[0];
    processFile(file);
};

const processFile = (file) => {
    if (file && isValidFileType(file)) {
        selectedFile.value = file;
        const videoElement = videoRef.value;
        videoElement.src = URL.createObjectURL(file);
        videoElement.load();
    } else {
        alert('请选择有效的视频文件（.mp4, .flv, .3gp, .mov）');
    }
};


const onVideoLoaded = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.value.videoWidth;
    canvas.height = videoRef.value.videoHeight;
    canvas.getContext('2d').drawImage(videoRef.value, 0, 0, canvas.width, canvas.height);
    videoPreviewUrl.value = canvas.toDataURL();
};

const togglePlayPause = () => {
    const video = videoRef.value;
    if (isPlaying.value) {
        video.pause();
    } else {
        video.play();
    }
    isPlaying.value = !isPlaying.value;
};


const selectOriginalLanguage = (lang) =>{
    originalLanguage.value = lang;
}
const selectSpeakerOption = (option) => {
    speakerOption.value = option;
}

</script>