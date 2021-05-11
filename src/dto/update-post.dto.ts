class CreateCommentaDto {
}

export class UpdatePostDto {
    readonly id: string
    title: string
    text: string
    autor: string
    comments: Array<string>
}