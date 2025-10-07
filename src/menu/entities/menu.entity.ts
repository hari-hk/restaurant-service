import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class MenuItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column('decimal')
  price: number;

  @Column({ default: true })
  available: boolean;
}
