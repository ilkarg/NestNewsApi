import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsEntity } from './modules/news/entities/news.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: '192.168.100.10',
            port: 3306,
            username: 'user',
            password: '123user123',
            database: 'news_api',
            synchronize: true,
            logging: true,
            entities: [NewsEntity],
            migrations: [],
        }),
    ],
})
export class DatabaseModule {}
