import { SchemaOptions } from 'mongoose';

export const DefaultSchemaOptions: SchemaOptions = {
  toJSON: {
    transform: (_doc, ret) => {
      ret.id = ret._id?.toString();
      delete ret._id;
    },
    versionKey: false,
  },
  versionKey: false,
};
