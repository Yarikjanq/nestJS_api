import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto{
    @ApiProperty({example: 'user@mail.com', description: 'Email adress'})
    readonly email: string;
    @ApiProperty({example: '123456789', description: 'User password'})
    readonly password: string;
}