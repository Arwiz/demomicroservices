import { Document } from 'mongoose';
export class CreateBlogDto extends Document {
    readonly    details: string;
    readonly    user_id: string;

}
