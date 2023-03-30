import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb+srv://arwiz:Wizni12345@cluster0.iz4b4rm.mongodb.net/?retryWrites=true&w=majority'),
  },
];