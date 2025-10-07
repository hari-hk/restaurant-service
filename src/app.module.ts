import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TablesModule } from './tables/tables.module';
import { BookingModule } from './booking/booking.module';
import { MenuModule } from './menu/menu.module';
import { OrdersModule } from './orders/orders.module';
import { NotificationModule } from './notification/notification.module';
import { ReportModule } from './report/report.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [AuthModule, UserModule, TablesModule, BookingModule, MenuModule, OrdersModule, NotificationModule, ReportModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
