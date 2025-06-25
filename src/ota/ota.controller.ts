import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OtaService } from './ota.service';
import { CreateOtaDto } from './dto/create-ota.dto';
import { UpdateOtaDto } from './dto/update-ota.dto';

@Controller('ota')
export class OtaController {
  constructor(private readonly otaService: OtaService) {}

  @Post()
  create(@Body() createOtaDto: CreateOtaDto) {
    return this.otaService.create(createOtaDto);
  }

  @Get()
  findAll() {
    return this.otaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.otaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOtaDto: UpdateOtaDto) {
    return this.otaService.update(+id, updateOtaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.otaService.remove(+id);
  }
}
