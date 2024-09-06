

export async function processVideo() {
    // 初始 POST 请求
    const initialResponse = await fetch('https://chacha-ai-lab-videotrans.hf.space/call/process_file', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            data: [
                { path: 'http://fromhere.one/1.mp4' }
            ]
        }),
    });


    const initialData = await initialResponse.json();
    const processId = initialData.event_id; // 根据实际响应结构替换

    // 使用 ID 进行第二次请求
    const statusRes = await fetch(`https://chacha-ai-lab-videotrans.hf.space/call/process_file/${processId}`);
    if (!statusRes.ok) {
        throw new Error('Failed to fetch status');
    }
    const statusData = await statusRes.text();
    // remove
    // event: complete
    // data: 
    const jsonData = statusData.split('\n').filter((line) => line.startsWith('data:')).map((line) => line.slice(6)).join('');
    const parsedData = JSON.parse(jsonData);
    downloadVideo(parsedData[0].video.url);
}

async function downloadVideo(videoUrl: string) {
    const videoResponse = await fetch(videoUrl);
    if (!videoResponse.ok) {
        throw new Error('Failed to download video');
    }

    const videoBlob = await videoResponse.blob();
    const downloadUrl = URL.createObjectURL(videoBlob);

    // 创建一个链接并自动点击下载文件
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = 'downloaded_file.mp4';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
