import { Injectable } from '@nestjs/common';
import { CreateOtaDto } from './dto/create-ota.dto';
import { UpdateOtaDto } from './dto/update-ota.dto';

@Injectable()
export class OtaService {
  create(createOtaDto: CreateOtaDto) {
    return 'This action adds a new ota';
  }

  findAll() {
    return `This action returns all ota`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ota`;
  }

  update(id: number, updateOtaDto: UpdateOtaDto) {
    return `This action updates a #${id} ota`;
  }

  remove(id: number) {
    return `This action removes a #${id} ota`;
  }
}
