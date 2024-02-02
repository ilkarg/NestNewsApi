import { Controller, Post, Get, Response, Request, Param } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post('addNews')
  async postAddNews(@Request() request, @Response() response): Promise<object> {
    return response.send(
      await this.newsService.postAddNews(request.body)
    );
  }

  @Get('getNews')
  async getNews(@Response() response): Promise<object> {
    return response.send(
      await this.newsService.getNews()
    );
  }

  @Get('getNews/:id')
  async getNewsById(@Param('id') id, @Response() response): Promise<object> {
    return response.send(
      await this.newsService.getNewsById(id)
    );
  }
}
