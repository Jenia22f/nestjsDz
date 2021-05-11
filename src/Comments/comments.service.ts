import {Injectable} from "@nestjs/common";
import {CreateUserDto} from "../dto/create-user.dto";
import {CreateCommentsDto} from "../dto/create-comments.dto";

@Injectable()
export class CommentsService {
    private comments = [
        {
            id: '1',
            text: 'Comment 1',
        },
        {
            id: '2',
            text: 'Comment 2',
        },
        {
            id: '3',
            text: 'Comment 3',
        },
        {
            id: '4',
            text: 'Comment 4',
        },
    ]

    getAll() {
        return this.comments
    }

    getById(id) {
        this.comments.find(u => u.id === id)
    }

    addComment(createCommentsDto: CreateCommentsDto) {
        return  this.comments.push({
            ...createCommentsDto,
            id: Date.now().toString()
        })
    }
}