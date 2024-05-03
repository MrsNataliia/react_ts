export interface PostModel {
    id: number,
    title: string,
    body: string,
    userId: number,
    tags?: string[],
    reactions?: number
}