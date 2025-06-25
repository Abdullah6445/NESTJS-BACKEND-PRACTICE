import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeacherModule } from './teacher/teacher.module';
import { PrismaModule } from './prisma/prisma.module';
import { OtaModule } from './ota/ota.module';

@Module({
  imports: [PrismaModule,TeacherModule, OtaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
