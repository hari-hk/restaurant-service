import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column('decimal', { default: 0 })
  totalRevenue: number;

  @Column('int', { default: 0 })
  totalBookings: number;

  @Column('int', { default: 0 })
  totalCleanings: number;
}
