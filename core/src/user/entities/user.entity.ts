import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;

  @Prop()
  first_name: String;

  @Prop()
  last_name: String;

  @Prop()
  mobile: String;

  @Prop()
  secondary_phone: String;
  
  @Prop()
  email: String;
  
  @Prop()
  city: String;

  @Prop()
  mailing_addresss: String;

  @Prop()
  official_address: String;

  @Prop()
  avatar: String;
}


export const UserSchema = SchemaFactory.createForClass(User);