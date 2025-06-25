import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";
import { Gender } from "generated/prisma/client";

export class CreateTeacherDto {


    @ApiProperty({
        description: 'The name of the teacher',
        example: 'abdullah',
        required: true,
    })
    teacherName: string;
    
    @ApiProperty({
        description: 'The name of the teacher',
        example: 'ab@gmail.com',
        required: true,

    })
    teacherEmail: string;
    
    @ApiProperty({
        description: 'The name of the teacher',
        example: '1234567890',
        required: false,
    })
    @IsOptional()
    teacherPhone?: number;
    
    @ApiProperty({
        description: 'The name of the teacher',
        example: 'John Doe',
        required: false,
    })
    techerGender: Gender;
    
    



    




}


export class UpdateTeacherDto {
  @ApiProperty({ example: 'abdullah', required: false })
  @IsOptional()
  teacherName?: string;

  @ApiProperty({ example: 'ab@gmail.com', required: false })
  @IsOptional()
  teacherEmail?: string;

  @ApiProperty({ example: '1234567890', required: false })
  @IsOptional()
  teacherPhone?: number;

  @ApiProperty({ example: 'MALE', required: false })
  @IsOptional()
  teacherGender?: Gender;
}
