import {Controller, Get, Param} from "@nestjs/common";
import {CommentsService} from "./comments.service";

@Controller('comments')
export class CommentsController {

    constructor(private commentsService: CommentsService) {
    }

    @Get()
    findAll() {
        this.commentsService.getAll()
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        this.commentsService.getById(id)
    }

}