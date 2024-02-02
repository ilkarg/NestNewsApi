import { Module } from '@nestjs/common';
import { NewsController } from './news.controller';
import { NewsRepository } from './repositories/news.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsEntity } from './entities/news.entity';
import { NewsService } from "./news.service";

const service = [NewsService];
const repository = [NewsRepository];

@Module({
  imports: [TypeOrmModule.forFeature([NewsEntity])],
  controllers: [NewsController],
  providers: [...service, ...repository]
})

export class NewsModule {}
