import {Module} from "@nestjs/common";
import {PostsController} from "./posts.controller";
import {PostsService} from "./posts.service";
import {CommentsService} from "../Comments/comments.service";

@Module({
    imports:[],
    controllers:[ PostsController ],
    providers:[ PostsService, CommentsService ]
})

export class PostsModule {}