
// const host = 'https://vt2.pan2017.cn'
const host = '';
/*
export const Task = z.object({
	name: Str({ example: "lorem" }),
	description: Str({ required: false }),
	due_date: DateTime(),
	fileId: Str(),
	completed: z.boolean().default(false),
	resultFileId: Str({ required: false }),
});
*/
export interface Task {
    name: string,
    originFile: string,
    completed: boolean,
    sessionId: string,
    targetFile: string,
    user: string
}

export function listTasks(): Promise<Task[]> {
    return fetch(`${host}/api/tasks`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(res => {
        return res.json()
    })
}