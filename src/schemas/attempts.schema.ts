import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AttemptDocument = Attempts & Document;

@Schema({ timestamps: true, collection: 'attempts' })
export class Attempts {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true, enum: ['sent', 'clicked'], default: 'sent' })
  status: 'sent' | 'clicked';
}

export const AttemptsSchema =
  SchemaFactory.createForClass(Attempts);
