import { PartialType } from '@nestjs/swagger';
import { CreateOtaDto } from './create-ota.dto';

export class UpdateOtaDto extends PartialType(CreateOtaDto) {}
