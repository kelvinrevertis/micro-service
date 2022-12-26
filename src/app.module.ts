import { Module } from '@nestjs/common';
import { AppController } from './infra/http/controllers/app.controller';
import { PrismaService } from './infra/prisma.server';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
