import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'news'})
export class NewsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string

  @Column()
  body: string
}
