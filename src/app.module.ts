import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UsersModule} from "./Users/users.module";
import {CommentsModule} from "./Comments/comments.module";
import {PostsModule} from "./Posts/posts.module";

@Module({
  imports: [UsersModule, CommentsModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
