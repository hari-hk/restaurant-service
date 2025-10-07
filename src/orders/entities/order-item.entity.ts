import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Order } from './order.entity';
import { MenuItem } from 'src/menu/entities/menu.entity';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => MenuItem)
  menuItem: MenuItem;

  @ManyToOne(() => Order, (order) => order.items)
  order: Order;

  @Column()
  quantity: number;

  @Column('decimal')
  subtotal: number;
}
