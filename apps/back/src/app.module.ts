import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaService } from './database/prisma.service'
import { UsersModule } from './users/users.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
@Module({
	imports: [ConfigModule.forRoot(), UsersModule, AuthModule],
	controllers: [AppController, AuthController],
	providers: [AppService, PrismaService, AuthService],
})
export class AppModule {}
