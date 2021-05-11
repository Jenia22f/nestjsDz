import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Put} from "@nestjs/common";
import {CreatePostDto} from "../dto/create-post.dto";
import {UpdatePostDto} from "../dto/update-post.dto";
import {PostsService} from "./posts.service";
import {CreateCommentsDto} from "../dto/create-comments.dto";
import {CommentsService} from "../Comments/comments.service";

@Controller('posts')
export class PostsController {

    constructor(private postsService: PostsService,
    private commentsService: CommentsService) {
    }

    @Get()
    findAll() {
        return  this.postsService.getAll()
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.postsService.getById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    createUser(@Body() createPostDto: CreatePostDto) {
        return this.postsService.create(createPostDto)
    }

    @Put(':id')
    updatePost(@Body() updatePostDto: UpdatePostDto, @Param('id') id: string) {
        return this.postsService.update(updatePostDto, id)
    }

    @Delete(':id')
    removePost(@Param('id') id: string) {
        return  this.postsService.remove(id)
    }

    @Post('/comment/:id')
    addCommentPost(@Body() createCommentsDto: CreateCommentsDto,@Param('id') id: string) {
        return [this.postsService.addCommentToPost(id),  this.commentsService.addComment(createCommentsDto)]
    }

}