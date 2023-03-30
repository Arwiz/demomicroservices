import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty()
    readonly first_name: String;

    @ApiProperty()
    readonly last_name: String;

    @ApiProperty()
    readonly mobile: String;

    @ApiProperty()
    readonly secondary_phone: String;

    @ApiProperty()
    readonly email: String;

    @ApiProperty()
    readonly city: String;
    @ApiProperty()
    readonly mailing_addresss: String;

    @ApiProperty()
    readonly official_address: String;

    @ApiProperty()
    readonly avatar: String;
}
