import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from '../interfaces/user.interface';
import { CreateUserDto } from '../dto/user.dto';

@Injectable()
export class BaseService {
  // constructor(
  //   @Inject('USER_MODEL')
  //   private catModel: Model<T>,
  // ) {}

  // async create(createCatDto: CreateUserDto): Promise<T> {
  //   const createdCat = new this.catModel(createCatDto);
  //   return createdCat.save();
  // }

  // async findAll(): Promise<T[]> {
  //   return this.catModel.find().exec();
  // }
} 