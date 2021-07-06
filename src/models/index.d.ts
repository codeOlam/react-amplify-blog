import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Author {
  readonly id: string;
  readonly name: string;
  readonly article?: (Article | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Author>);
  static copyOf(source: Author, mutator: (draft: MutableModel<Author>) => MutableModel<Author> | void): Author;
}

export declare class Article {
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly author?: Author;
  readonly comments?: (Comment | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Article>);
  static copyOf(source: Article, mutator: (draft: MutableModel<Article>) => MutableModel<Article> | void): Article;
}

export declare class Comment {
  readonly id: string;
  readonly article?: Article;
  readonly content: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Comment>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}