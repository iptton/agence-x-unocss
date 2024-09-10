
const host = 'https://vt2.pan2017.cn'
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
    description: string,
    due_date: string,
    fileId: string,
    completed: boolean,
    resultFileId: string,
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