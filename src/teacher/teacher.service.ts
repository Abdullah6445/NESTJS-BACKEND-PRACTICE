import { Injectable } from '@nestjs/common';
import { CreateTeacherDto, UpdateTeacherDto } from './dto/create-teacher.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TeacherService {
  
  constructor(private readonly prisma:PrismaService){}
  
  
  async create(createTeacherDto: CreateTeacherDto) {

    const teacher = await  this.prisma.teacher.create({
      data: createTeacherDto,
    });

    return {
      message: 'Teacher created successfully',
      data: teacher,
      status: 201,
    }
  }

  async findAll() {
    const teachers = await this.prisma.teacher.findMany();
    return {
      message: 'All Teachers Retrieved successfully',
      data: teachers,
      status: 200,
    }
    
  }

  async findOne(id: number) {

    const selectedTeacher = await this.prisma.teacher.findUnique({
      where: {
        id
      }
    });

    if (!selectedTeacher) {
      return {
        message: 'Teacher not found',
        status: 404,
      };
    }else{
      return {
        data: selectedTeacher,
        message: 'Teacher found successfully',
        status: 200,
      };
    }
  }

  async update(id: number, updateTeacherDto: UpdateTeacherDto) {

    const updatedTeacher = await this.prisma.teacher.update({
      where: {
        id
      },
      data: updateTeacherDto,
    });

    return {
        message: 'Teacher updated successfully',
        data : updatedTeacher,
        status: 200,
      };
  }

  async remove(id: number) {

    const teacher = await this.prisma.teacher.delete({
      where: {
        id
      }
    });
    if (!teacher) {
      return {
        message: 'Teacher not found',
        status: 404,
      };
    }else{
      return {
        data: teacher,
        message: 'Teacher removed successfully',
        status: 200,
      };
    }
  }
}
