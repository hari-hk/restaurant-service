import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Booking } from 'src/booking/entities/booking.entity';

export enum TableStatus {
  AVAILABLE = 'available',
  OCCUPIED = 'occupied',
  NEEDS_CLEANING = 'needs_cleaning',
  CLEANING_IN_PROGRESS = 'cleaning_in_progress',
}

@Entity()
export class Table {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tableNumber: string;

  @Column({ type: 'enum', enum: TableStatus, default: TableStatus.AVAILABLE })
  status: TableStatus;

  @Column()
  capacity: number;

  @OneToMany(() => Booking, (booking) => booking.table)
  bookings: Booking[];
}
