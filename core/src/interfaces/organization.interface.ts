import { Document } from 'mongoose';

export interface Organization extends Document {
    readonly name: String;
    readonly org_type: String;
}