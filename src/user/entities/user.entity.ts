import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Booking } from 'src/booking/entities/booking.entity';
import { Order } from 'src/orders/entities/order.entity';

export enum UserRole {
  ADMIN = 'admin',
  WAITER = 'waiter',
  CLEANER = 'cleaner',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.WAITER })
  role: UserRole;

  @OneToMany(() => Booking, (booking) => booking.staff)
  bookings: Booking[];

  @OneToMany(() => Order, (order) => order.staff)
  orders: Order[];
}
