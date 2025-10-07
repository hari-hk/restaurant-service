import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { Booking } from 'src/booking/entities/booking.entity';
import { User } from 'src/user/entities/user.entity';
import { OrderItem } from './order-item.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Booking, (booking) => booking.order)
  booking: Booking;

  @ManyToOne(() => User, (user) => user.orders)
  staff: User;

  @OneToMany(() => OrderItem, (item) => item.order, { cascade: true })
  items: OrderItem[];

  @Column('decimal', { default: 0 })
  totalAmount: number;

  @Column({ default: false })
  isPaid: boolean;

  @Column({ default: 'open' })
  status: string;
}
