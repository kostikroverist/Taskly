
export interface ITask {
    id: number;
    title: string;
    importance: string;
    time: string;
    duration: string
}

export interface Day {
    day: number;
    tasks: ITask[];
}