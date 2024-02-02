import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import { NewsEntity } from '../entities/news.entity';

@Injectable()
export class NewsRepository {
  constructor(
    @InjectRepository(NewsEntity)
    private readonly newsRepository: Repository<NewsEntity>,
  ) {}

  async create(newsData: NewsEntity): Promise<NewsEntity> {
    return this.newsRepository.save(newsData);
  }

  async findAll(): Promise<NewsEntity[]> {
    return this.newsRepository.find();
  }

  async find(id) {
    return this.newsRepository.findOne({where: {id: id}});
  }
}
