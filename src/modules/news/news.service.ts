import { Injectable } from '@nestjs/common';
import { NewsEntity } from './entities/news.entity';
import { NewsRepository } from './repositories/news.repository';

@Injectable()
export class NewsService {
  constructor(private readonly newsRepository: NewsRepository) {}
  async postAddNews(newsData: {title: string, body: string}): Promise<object> {
    const newsEntity: NewsEntity = Object.assign(new NewsEntity(), newsData);
    await this.newsRepository.create(newsEntity);
    return {
      message: 'Новость успешно добавлена'
    };
  }

  async getNews(): Promise<object[]> {
    return this.newsRepository.findAll();
  }

  async getNewsById(id: string | number): Promise<object> {
    return this.newsRepository.find(id);
  }
}