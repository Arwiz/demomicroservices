import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BlogDocument = HydratedDocument<Blog>;

@Schema()
export class Blog {
  @Prop({ required: true })
  details: string;

  @Prop({ required: true })
  user_id: string;
}


export const BlogSchema = SchemaFactory.createForClass(Blog);
