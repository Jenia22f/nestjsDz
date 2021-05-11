import {Injectable} from "@nestjs/common";
import {CreateUserDto} from "../dto/create-user.dto";
import {UserEntities} from "../user-entities";
import {UpdateUsersDto} from "../dto/update-users.dto";

@Injectable()
export class UsersService {
    private users: UserEntities[] = [
        {
            id: '1',
            name: 'Name1',
            email: 'awwdsa@asd.com'
        },
        {
            id: '2',
            name: 'Name2',
            email: 'awdfda@asd.com'
        },
        {
            id: '3',
            name: 'Name3',
            email: 'awwadddsa@asd.com'
        },
    ]

    getAll(): UserEntities[] {
        return this.users
    }

    getById(id): UserEntities {
       return this.users.find(u => u.id === id)
    }

    create(createUserDto: CreateUserDto) {
       return this.users.push({
            ...createUserDto,
            id: Date.now().toString()
        })
    }

    remove(id: string): UserEntities[] {
        const post = this.users.find(p => p.id === id)
        let index = this.users.indexOf(post)
        if (index > -1) {
            this.users.splice(index, 1);
        }
        return this.users
    }

    update(updateUserDto: UpdateUsersDto, id: string) {
        let updatedUser = this.users.find( u => u.id === id)
        updatedUser = updateUserDto
        return updatedUser
    }
}