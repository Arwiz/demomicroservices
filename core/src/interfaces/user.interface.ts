import { Document } from 'mongoose';

export interface User extends Document {
  readonly first_name: String;
  readonly last_name: String;
  readonly mobile: String;
  readonly secondary_phone: String;
  readonly email: String;
  readonly city: String;
  readonly mailing_addresss: String;
  readonly official_address: String;
  readonly avatar: String;
}


export interface Organization extends Document {
    readonly name: String;
    readonly org_type: String;
}