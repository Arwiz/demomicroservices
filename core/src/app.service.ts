import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrganizationDto, UpdateOrganizationDto } from './dto/organization.dto';
import { Organization } from './interfaces/user.interface';
import { OrganizationSchema } from './schemas';

@Injectable()
export class AppService {
  constructor(@InjectModel('Organization') private orgnizationModel: Model<Organization>) {}

  async create(createUserDto: CreateOrganizationDto) : Promise<Organization> {
    const createdCat = new this.orgnizationModel(createUserDto);
    return createdCat.save();

  }
  
  async findAll(): Promise<Organization[]> {
    return this.orgnizationModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateOrganizationDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
