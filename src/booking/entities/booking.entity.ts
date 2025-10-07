import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { Table } from 'src/tables/entities/table.entity';
import { Order } from 'src/orders/entities/order.entity';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Table, (table) => table.bookings)
  table: Table;

  @ManyToOne(() => User, (user) => user.bookings)
  staff: User;

  @Column()
  customerName: string;

  @Column()
  customerCount: number;

  @Column()
  startTime: Date;

  @Column({ nullable: true })
  endTime: Date;

  @OneToOne(() => Order, (order) => order.booking)
  @JoinColumn()
  order: Order;
}
