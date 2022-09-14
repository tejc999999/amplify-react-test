// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Question, Todo } = initSchema(schema);

export {
  Question,
  Todo
};