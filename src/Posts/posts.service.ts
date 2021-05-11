import {Injectable} from "@nestjs/common";
import {CreatePostDto} from "../dto/create-post.dto";
import {CreateCommentsDto} from "../dto/create-comments.dto";

class CreatePostDt {
}

@Injectable()
export class PostsService {
    private posts = [
        {
            id: '1',
            title: 'Title 1',
            text: 'Some text 1',
            author: '1',
            comments: ['1', '2']
        },
        {
            id: '2',
            title: 'Title 2',
            text: 'Some text 2',
            author: '2',
            comments: ['3', '4']
        },
        {
            id: '3',
            title: 'Title 3',
            text: 'Some text 3',
            author: '3',
            comments: []
        },
    ]

    getAll() {
        return this.posts
    }

    getById(id) {
        return  this.posts.find(u => u.id === id)
    }

    create(createPostDto: CreatePostDto) {
        return  this.posts.push({
            ...createPostDto,
            id: Date.now().toString()
        })
    }

    addCommentToPost(postId) {
        let updatedPost = this.posts.find(p => p.id === postId)
        updatedPost.comments.push(Date.now().toString())
        return this.posts
    }

    remove(id) {
       const post = this.posts.find(p => p.id === id)
       let index = this.posts.indexOf(post)
        if (index > -1) {
            this.posts.splice(index, 1);
        }
        return this.posts
    }

    update(updatedPostDto, id) {
        const post = this.posts.find(p => p.id === id)
        let index = this.posts.indexOf(post)
        if (index > -1) {
            this.posts.splice(index, 1);
        }
        this.posts.push({
            ...updatedPostDto,
            id: Date.now().toString()
        })
        return this.posts
    }
}