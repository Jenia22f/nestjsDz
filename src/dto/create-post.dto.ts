import {CreateCommentsDto} from "./create-comments.dto";

export class CreatePostDto {
    readonly id: string
    title: string
    text: string
    author: string
    comments: Array<string>
}