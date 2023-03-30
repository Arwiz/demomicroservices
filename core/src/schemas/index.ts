
import * as mongoose from 'mongoose';

export const OrganizationSchema = new mongoose.Schema({
    name: String,
    org_type: String
  });

  export const PlantSchema = new mongoose.Schema({
    name: String,
    location_lat: String,
    Location_long: String,
  });


  export const UserSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    mobile: String,
    secondary_phone: String,
    email: String,
    city: String,
    mailing_addresss: String,
    official_address: String,
    avatar: String,
  });

  export const ShiftSchema = new mongoose.Schema({
    name: String,
    start_time: String,
    endT_ime: String,
    over_night: String,
  });


  export const RosterSchema = new mongoose.Schema({
    date: Date,
    shift_id: String,
    user_id: String,
    actual_start_time: String,
    actual_end_time: String,
  });
