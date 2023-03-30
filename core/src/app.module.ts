import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './db/database.module';
import { UserModule } from './user/user.module';

import { MongooseModule } from '@nestjs/mongoose';
import { User } from './user/entities/user.entity';
import { OrganizationSchema, UserSchema } from './schemas';
import { OrganizationController } from './organization.controller';
import { Organization } from './interfaces/user.interface';
import { ProductModule } from './product/product.module';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [
    // DatabaseModule, 
    MongooseModule.forRoot('mongodb+srv://arwiz:Wizni12345@cluster0.iz4b4rm.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{ name: 'Organization' , schema: OrganizationSchema }]),
    UserModule,
    ProductModule,
    BlogModule,
  ],
  controllers: [AppController, OrganizationController],
  providers: [AppService],
})
export class AppModule {}

// mongodb+srv://arwiz:<password>@cluster0.lvv9l.mongodb.net/?retryWrites=true&w=majority
//mongodb+srv://arwiz:Wizni12345@cluster0.iz4b4rm.mongodb.net/?retryWrites=true&w=majority