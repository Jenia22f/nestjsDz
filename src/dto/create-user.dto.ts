import { isString } from 'class-validator'

export class CreateUserDto {


    // isString()
    // isNotEmpty()
    readonly id: string

    // isNotEmpty()
    // isString()
    name: string

    // isNotEmpty()
    // isString()
    // isEmail()
    email: string
}