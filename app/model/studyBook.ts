import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose';
import { ObjectId } from 'mongodb';
import { DefaultSchemaOptions } from '../basic/schemaOptions';

@modelOptions({
  schemaOptions: {
    collection: 'StudyBook',
    timestamps: { createdAt: 'created_time', updatedAt: 'updated_time' },
    ...DefaultSchemaOptions,
  },
})
class StudyBookSchema {
  @prop({ required: true })
  creator: string;

  @prop({ required: true })
  name: string;

  @prop({ required: true })
  book_id: string;

  @prop({ required: true, default: () => new Date() })
  created_time: Date;

  @prop({ required: true, default: () => new Date() })
  updated_time: Date;
}

export type StudyBookSchemaDoc = StudyBookSchema & { _id: ObjectId };

export default () => getModelForClass(StudyBookSchema);
