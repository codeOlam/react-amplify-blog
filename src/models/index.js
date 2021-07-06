// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Author, Article, Comment } = initSchema(schema);

export {
  Author,
  Article,
  Comment
};