// ts-gql-integrity:199326b3ed1e571f8f0a75d38e47f77f
/*
ts-gql-meta-begin
{
  "hash": "006a7c36105c10ab259517ac96562c10"
}
ts-gql-meta-end
*/
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type User = {
  readonly __typename: 'User';
  readonly id: Scalars['ID'];
  readonly name: Maybe<Scalars['String']>;
  readonly email: Maybe<Scalars['String']>;
  readonly password: Maybe<PasswordState>;
  readonly posts: Maybe<ReadonlyArray<Post>>;
  readonly postsCount: Maybe<Scalars['Int']>;
  readonly forms: Maybe<ReadonlyArray<Form>>;
  readonly formsCount: Maybe<Scalars['Int']>;
};


export type UserpostsArgs = {
  where?: PostWhereInput;
  orderBy?: ReadonlyArray<PostOrderByInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type UserpostsCountArgs = {
  where?: PostWhereInput;
};


export type UserformsArgs = {
  where?: FormWhereInput;
  orderBy?: ReadonlyArray<FormOrderByInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type UserformsCountArgs = {
  where?: FormWhereInput;
};

export type PasswordState = {
  readonly __typename: 'PasswordState';
  readonly isSet: Scalars['Boolean'];
};

export type UserWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly email?: InputMaybe<Scalars['String']>;
};

export type UserWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  readonly id?: InputMaybe<IDFilter>;
  readonly name?: InputMaybe<StringFilter>;
  readonly email?: InputMaybe<StringFilter>;
  readonly posts?: InputMaybe<PostManyRelationFilter>;
  readonly forms?: InputMaybe<FormManyRelationFilter>;
};

export type IDFilter = {
  readonly equals?: InputMaybe<Scalars['ID']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly lt?: InputMaybe<Scalars['ID']>;
  readonly lte?: InputMaybe<Scalars['ID']>;
  readonly gt?: InputMaybe<Scalars['ID']>;
  readonly gte?: InputMaybe<Scalars['ID']>;
  readonly not?: InputMaybe<IDFilter>;
};

export type StringFilter = {
  readonly equals?: InputMaybe<Scalars['String']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly lt?: InputMaybe<Scalars['String']>;
  readonly lte?: InputMaybe<Scalars['String']>;
  readonly gt?: InputMaybe<Scalars['String']>;
  readonly gte?: InputMaybe<Scalars['String']>;
  readonly contains?: InputMaybe<Scalars['String']>;
  readonly startsWith?: InputMaybe<Scalars['String']>;
  readonly endsWith?: InputMaybe<Scalars['String']>;
  readonly mode?: InputMaybe<QueryMode>;
  readonly not?: InputMaybe<NestedStringFilter>;
};

export type QueryMode =
  | 'default'
  | 'insensitive';

export type NestedStringFilter = {
  readonly equals?: InputMaybe<Scalars['String']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly lt?: InputMaybe<Scalars['String']>;
  readonly lte?: InputMaybe<Scalars['String']>;
  readonly gt?: InputMaybe<Scalars['String']>;
  readonly gte?: InputMaybe<Scalars['String']>;
  readonly contains?: InputMaybe<Scalars['String']>;
  readonly startsWith?: InputMaybe<Scalars['String']>;
  readonly endsWith?: InputMaybe<Scalars['String']>;
  readonly not?: InputMaybe<NestedStringFilter>;
};

export type PostManyRelationFilter = {
  readonly every?: InputMaybe<PostWhereInput>;
  readonly some?: InputMaybe<PostWhereInput>;
  readonly none?: InputMaybe<PostWhereInput>;
};

export type FormManyRelationFilter = {
  readonly every?: InputMaybe<FormWhereInput>;
  readonly some?: InputMaybe<FormWhereInput>;
  readonly none?: InputMaybe<FormWhereInput>;
};

export type UserOrderByInput = {
  readonly id?: InputMaybe<OrderDirection>;
  readonly name?: InputMaybe<OrderDirection>;
  readonly email?: InputMaybe<OrderDirection>;
};

export type OrderDirection =
  | 'asc'
  | 'desc';

export type UserUpdateInput = {
  readonly name?: InputMaybe<Scalars['String']>;
  readonly email?: InputMaybe<Scalars['String']>;
  readonly password?: InputMaybe<Scalars['String']>;
  readonly posts?: InputMaybe<PostRelateToManyForUpdateInput>;
  readonly forms?: InputMaybe<FormRelateToManyForUpdateInput>;
};

export type PostRelateToManyForUpdateInput = {
  readonly disconnect?: InputMaybe<ReadonlyArray<PostWhereUniqueInput>>;
  readonly set?: InputMaybe<ReadonlyArray<PostWhereUniqueInput>>;
  readonly create?: InputMaybe<ReadonlyArray<PostCreateInput>>;
  readonly connect?: InputMaybe<ReadonlyArray<PostWhereUniqueInput>>;
};

export type FormRelateToManyForUpdateInput = {
  readonly disconnect?: InputMaybe<ReadonlyArray<FormWhereUniqueInput>>;
  readonly set?: InputMaybe<ReadonlyArray<FormWhereUniqueInput>>;
  readonly create?: InputMaybe<ReadonlyArray<FormCreateInput>>;
  readonly connect?: InputMaybe<ReadonlyArray<FormWhereUniqueInput>>;
};

export type UserUpdateArgs = {
  readonly where: UserWhereUniqueInput;
  readonly data: UserUpdateInput;
};

export type UserCreateInput = {
  readonly name?: InputMaybe<Scalars['String']>;
  readonly email?: InputMaybe<Scalars['String']>;
  readonly password?: InputMaybe<Scalars['String']>;
  readonly posts?: InputMaybe<PostRelateToManyForCreateInput>;
  readonly forms?: InputMaybe<FormRelateToManyForCreateInput>;
};

export type PostRelateToManyForCreateInput = {
  readonly create?: InputMaybe<ReadonlyArray<PostCreateInput>>;
  readonly connect?: InputMaybe<ReadonlyArray<PostWhereUniqueInput>>;
};

export type FormRelateToManyForCreateInput = {
  readonly create?: InputMaybe<ReadonlyArray<FormCreateInput>>;
  readonly connect?: InputMaybe<ReadonlyArray<FormWhereUniqueInput>>;
};

export type Post = {
  readonly __typename: 'Post';
  readonly id: Scalars['ID'];
  readonly title: Maybe<Scalars['String']>;
  readonly status: Maybe<Scalars['String']>;
  readonly content: Maybe<Post_content_Document>;
  readonly publishDate: Maybe<Scalars['DateTime']>;
  readonly author: Maybe<User>;
  readonly tags: Maybe<ReadonlyArray<Tag>>;
  readonly tagsCount: Maybe<Scalars['Int']>;
};


export type PosttagsArgs = {
  where?: TagWhereInput;
  orderBy?: ReadonlyArray<TagOrderByInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type PosttagsCountArgs = {
  where?: TagWhereInput;
};

export type Post_content_Document = {
  readonly __typename: 'Post_content_Document';
  readonly document: Scalars['JSON'];
};


export type Post_content_DocumentdocumentArgs = {
  hydrateRelationships?: Scalars['Boolean'];
};

export type PostWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['ID']>;
};

export type PostWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<PostWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<PostWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<PostWhereInput>>;
  readonly id?: InputMaybe<IDFilter>;
  readonly title?: InputMaybe<StringFilter>;
  readonly status?: InputMaybe<StringNullableFilter>;
  readonly publishDate?: InputMaybe<DateTimeNullableFilter>;
  readonly author?: InputMaybe<UserWhereInput>;
  readonly tags?: InputMaybe<TagManyRelationFilter>;
};

export type StringNullableFilter = {
  readonly equals?: InputMaybe<Scalars['String']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly lt?: InputMaybe<Scalars['String']>;
  readonly lte?: InputMaybe<Scalars['String']>;
  readonly gt?: InputMaybe<Scalars['String']>;
  readonly gte?: InputMaybe<Scalars['String']>;
  readonly contains?: InputMaybe<Scalars['String']>;
  readonly startsWith?: InputMaybe<Scalars['String']>;
  readonly endsWith?: InputMaybe<Scalars['String']>;
  readonly mode?: InputMaybe<QueryMode>;
  readonly not?: InputMaybe<NestedStringNullableFilter>;
};

export type NestedStringNullableFilter = {
  readonly equals?: InputMaybe<Scalars['String']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly lt?: InputMaybe<Scalars['String']>;
  readonly lte?: InputMaybe<Scalars['String']>;
  readonly gt?: InputMaybe<Scalars['String']>;
  readonly gte?: InputMaybe<Scalars['String']>;
  readonly contains?: InputMaybe<Scalars['String']>;
  readonly startsWith?: InputMaybe<Scalars['String']>;
  readonly endsWith?: InputMaybe<Scalars['String']>;
  readonly not?: InputMaybe<NestedStringNullableFilter>;
};

export type DateTimeNullableFilter = {
  readonly equals?: InputMaybe<Scalars['DateTime']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly lt?: InputMaybe<Scalars['DateTime']>;
  readonly lte?: InputMaybe<Scalars['DateTime']>;
  readonly gt?: InputMaybe<Scalars['DateTime']>;
  readonly gte?: InputMaybe<Scalars['DateTime']>;
  readonly not?: InputMaybe<DateTimeNullableFilter>;
};

export type TagManyRelationFilter = {
  readonly every?: InputMaybe<TagWhereInput>;
  readonly some?: InputMaybe<TagWhereInput>;
  readonly none?: InputMaybe<TagWhereInput>;
};

export type PostOrderByInput = {
  readonly id?: InputMaybe<OrderDirection>;
  readonly title?: InputMaybe<OrderDirection>;
  readonly status?: InputMaybe<OrderDirection>;
  readonly publishDate?: InputMaybe<OrderDirection>;
};

export type PostUpdateInput = {
  readonly title?: InputMaybe<Scalars['String']>;
  readonly status?: InputMaybe<Scalars['String']>;
  readonly content?: InputMaybe<Scalars['JSON']>;
  readonly publishDate?: InputMaybe<Scalars['DateTime']>;
  readonly author?: InputMaybe<UserRelateToOneForUpdateInput>;
  readonly tags?: InputMaybe<TagRelateToManyForUpdateInput>;
};

export type UserRelateToOneForUpdateInput = {
  readonly create?: InputMaybe<UserCreateInput>;
  readonly connect?: InputMaybe<UserWhereUniqueInput>;
  readonly disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type TagRelateToManyForUpdateInput = {
  readonly disconnect?: InputMaybe<ReadonlyArray<TagWhereUniqueInput>>;
  readonly set?: InputMaybe<ReadonlyArray<TagWhereUniqueInput>>;
  readonly create?: InputMaybe<ReadonlyArray<TagCreateInput>>;
  readonly connect?: InputMaybe<ReadonlyArray<TagWhereUniqueInput>>;
};

export type PostUpdateArgs = {
  readonly where: PostWhereUniqueInput;
  readonly data: PostUpdateInput;
};

export type PostCreateInput = {
  readonly title?: InputMaybe<Scalars['String']>;
  readonly status?: InputMaybe<Scalars['String']>;
  readonly content?: InputMaybe<Scalars['JSON']>;
  readonly publishDate?: InputMaybe<Scalars['DateTime']>;
  readonly author?: InputMaybe<UserRelateToOneForCreateInput>;
  readonly tags?: InputMaybe<TagRelateToManyForCreateInput>;
};

export type UserRelateToOneForCreateInput = {
  readonly create?: InputMaybe<UserCreateInput>;
  readonly connect?: InputMaybe<UserWhereUniqueInput>;
};

export type TagRelateToManyForCreateInput = {
  readonly create?: InputMaybe<ReadonlyArray<TagCreateInput>>;
  readonly connect?: InputMaybe<ReadonlyArray<TagWhereUniqueInput>>;
};

export type Tag = {
  readonly __typename: 'Tag';
  readonly id: Scalars['ID'];
  readonly name: Maybe<Scalars['String']>;
  readonly posts: Maybe<ReadonlyArray<Post>>;
  readonly postsCount: Maybe<Scalars['Int']>;
};


export type TagpostsArgs = {
  where?: PostWhereInput;
  orderBy?: ReadonlyArray<PostOrderByInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type TagpostsCountArgs = {
  where?: PostWhereInput;
};

export type TagWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['ID']>;
};

export type TagWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<TagWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<TagWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<TagWhereInput>>;
  readonly id?: InputMaybe<IDFilter>;
  readonly name?: InputMaybe<StringFilter>;
  readonly posts?: InputMaybe<PostManyRelationFilter>;
};

export type TagOrderByInput = {
  readonly id?: InputMaybe<OrderDirection>;
  readonly name?: InputMaybe<OrderDirection>;
};

export type TagUpdateInput = {
  readonly name?: InputMaybe<Scalars['String']>;
  readonly posts?: InputMaybe<PostRelateToManyForUpdateInput>;
};

export type TagUpdateArgs = {
  readonly where: TagWhereUniqueInput;
  readonly data: TagUpdateInput;
};

export type TagCreateInput = {
  readonly name?: InputMaybe<Scalars['String']>;
  readonly posts?: InputMaybe<PostRelateToManyForCreateInput>;
};

export type Form = {
  readonly __typename: 'Form';
  readonly id: Scalars['ID'];
  readonly citation: Maybe<Scalars['String']>;
  readonly contentKind: Maybe<Scalars['Int']>;
  readonly description: Maybe<Scalars['String']>;
  readonly displayName: Maybe<Scalars['String']>;
  readonly canonicalRef: Maybe<Scalars['String']>;
  readonly editor: Maybe<ReadonlyArray<User>>;
  readonly editorCount: Maybe<Scalars['Int']>;
};


export type FormeditorArgs = {
  where?: UserWhereInput;
  orderBy?: ReadonlyArray<UserOrderByInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type FormeditorCountArgs = {
  where?: UserWhereInput;
};

export type FormWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['ID']>;
};

export type FormWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<FormWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<FormWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<FormWhereInput>>;
  readonly id?: InputMaybe<IDFilter>;
  readonly citation?: InputMaybe<StringFilter>;
  readonly contentKind?: InputMaybe<IntNullableFilter>;
  readonly description?: InputMaybe<StringFilter>;
  readonly displayName?: InputMaybe<StringFilter>;
  readonly canonicalRef?: InputMaybe<StringFilter>;
  readonly editor?: InputMaybe<UserManyRelationFilter>;
};

export type IntNullableFilter = {
  readonly equals?: InputMaybe<Scalars['Int']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly lt?: InputMaybe<Scalars['Int']>;
  readonly lte?: InputMaybe<Scalars['Int']>;
  readonly gt?: InputMaybe<Scalars['Int']>;
  readonly gte?: InputMaybe<Scalars['Int']>;
  readonly not?: InputMaybe<IntNullableFilter>;
};

export type UserManyRelationFilter = {
  readonly every?: InputMaybe<UserWhereInput>;
  readonly some?: InputMaybe<UserWhereInput>;
  readonly none?: InputMaybe<UserWhereInput>;
};

export type FormOrderByInput = {
  readonly id?: InputMaybe<OrderDirection>;
  readonly citation?: InputMaybe<OrderDirection>;
  readonly contentKind?: InputMaybe<OrderDirection>;
  readonly description?: InputMaybe<OrderDirection>;
  readonly displayName?: InputMaybe<OrderDirection>;
  readonly canonicalRef?: InputMaybe<OrderDirection>;
};

export type FormUpdateInput = {
  readonly citation?: InputMaybe<Scalars['String']>;
  readonly contentKind?: InputMaybe<Scalars['Int']>;
  readonly description?: InputMaybe<Scalars['String']>;
  readonly displayName?: InputMaybe<Scalars['String']>;
  readonly canonicalRef?: InputMaybe<Scalars['String']>;
  readonly editor?: InputMaybe<UserRelateToManyForUpdateInput>;
};

export type UserRelateToManyForUpdateInput = {
  readonly disconnect?: InputMaybe<ReadonlyArray<UserWhereUniqueInput>>;
  readonly set?: InputMaybe<ReadonlyArray<UserWhereUniqueInput>>;
  readonly create?: InputMaybe<ReadonlyArray<UserCreateInput>>;
  readonly connect?: InputMaybe<ReadonlyArray<UserWhereUniqueInput>>;
};

export type FormUpdateArgs = {
  readonly where: FormWhereUniqueInput;
  readonly data: FormUpdateInput;
};

export type FormCreateInput = {
  readonly citation?: InputMaybe<Scalars['String']>;
  readonly contentKind?: InputMaybe<Scalars['Int']>;
  readonly description?: InputMaybe<Scalars['String']>;
  readonly displayName?: InputMaybe<Scalars['String']>;
  readonly canonicalRef?: InputMaybe<Scalars['String']>;
  readonly editor?: InputMaybe<UserRelateToManyForCreateInput>;
};

export type UserRelateToManyForCreateInput = {
  readonly create?: InputMaybe<ReadonlyArray<UserCreateInput>>;
  readonly connect?: InputMaybe<ReadonlyArray<UserWhereUniqueInput>>;
};

export type Mutation = {
  readonly __typename: 'Mutation';
  readonly createUser: Maybe<User>;
  readonly createUsers: Maybe<ReadonlyArray<Maybe<User>>>;
  readonly updateUser: Maybe<User>;
  readonly updateUsers: Maybe<ReadonlyArray<Maybe<User>>>;
  readonly deleteUser: Maybe<User>;
  readonly deleteUsers: Maybe<ReadonlyArray<Maybe<User>>>;
  readonly createPost: Maybe<Post>;
  readonly createPosts: Maybe<ReadonlyArray<Maybe<Post>>>;
  readonly updatePost: Maybe<Post>;
  readonly updatePosts: Maybe<ReadonlyArray<Maybe<Post>>>;
  readonly deletePost: Maybe<Post>;
  readonly deletePosts: Maybe<ReadonlyArray<Maybe<Post>>>;
  readonly createTag: Maybe<Tag>;
  readonly createTags: Maybe<ReadonlyArray<Maybe<Tag>>>;
  readonly updateTag: Maybe<Tag>;
  readonly updateTags: Maybe<ReadonlyArray<Maybe<Tag>>>;
  readonly deleteTag: Maybe<Tag>;
  readonly deleteTags: Maybe<ReadonlyArray<Maybe<Tag>>>;
  readonly createForm: Maybe<Form>;
  readonly createForms: Maybe<ReadonlyArray<Maybe<Form>>>;
  readonly updateForm: Maybe<Form>;
  readonly updateForms: Maybe<ReadonlyArray<Maybe<Form>>>;
  readonly deleteForm: Maybe<Form>;
  readonly deleteForms: Maybe<ReadonlyArray<Maybe<Form>>>;
  readonly endSession: Scalars['Boolean'];
  readonly authenticateUserWithPassword: Maybe<UserAuthenticationWithPasswordResult>;
  readonly createInitialUser: UserAuthenticationWithPasswordSuccess;
};


export type MutationcreateUserArgs = {
  data: UserCreateInput;
};


export type MutationcreateUsersArgs = {
  data: ReadonlyArray<UserCreateInput>;
};


export type MutationupdateUserArgs = {
  where: UserWhereUniqueInput;
  data: UserUpdateInput;
};


export type MutationupdateUsersArgs = {
  data: ReadonlyArray<UserUpdateArgs>;
};


export type MutationdeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationdeleteUsersArgs = {
  where: ReadonlyArray<UserWhereUniqueInput>;
};


export type MutationcreatePostArgs = {
  data: PostCreateInput;
};


export type MutationcreatePostsArgs = {
  data: ReadonlyArray<PostCreateInput>;
};


export type MutationupdatePostArgs = {
  where: PostWhereUniqueInput;
  data: PostUpdateInput;
};


export type MutationupdatePostsArgs = {
  data: ReadonlyArray<PostUpdateArgs>;
};


export type MutationdeletePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationdeletePostsArgs = {
  where: ReadonlyArray<PostWhereUniqueInput>;
};


export type MutationcreateTagArgs = {
  data: TagCreateInput;
};


export type MutationcreateTagsArgs = {
  data: ReadonlyArray<TagCreateInput>;
};


export type MutationupdateTagArgs = {
  where: TagWhereUniqueInput;
  data: TagUpdateInput;
};


export type MutationupdateTagsArgs = {
  data: ReadonlyArray<TagUpdateArgs>;
};


export type MutationdeleteTagArgs = {
  where: TagWhereUniqueInput;
};


export type MutationdeleteTagsArgs = {
  where: ReadonlyArray<TagWhereUniqueInput>;
};


export type MutationcreateFormArgs = {
  data: FormCreateInput;
};


export type MutationcreateFormsArgs = {
  data: ReadonlyArray<FormCreateInput>;
};


export type MutationupdateFormArgs = {
  where: FormWhereUniqueInput;
  data: FormUpdateInput;
};


export type MutationupdateFormsArgs = {
  data: ReadonlyArray<FormUpdateArgs>;
};


export type MutationdeleteFormArgs = {
  where: FormWhereUniqueInput;
};


export type MutationdeleteFormsArgs = {
  where: ReadonlyArray<FormWhereUniqueInput>;
};


export type MutationauthenticateUserWithPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationcreateInitialUserArgs = {
  data: CreateInitialUserInput;
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordSuccess | UserAuthenticationWithPasswordFailure;

export type UserAuthenticationWithPasswordSuccess = {
  readonly __typename: 'UserAuthenticationWithPasswordSuccess';
  readonly sessionToken: Scalars['String'];
  readonly item: User;
};

export type UserAuthenticationWithPasswordFailure = {
  readonly __typename: 'UserAuthenticationWithPasswordFailure';
  readonly message: Scalars['String'];
};

export type CreateInitialUserInput = {
  readonly name?: InputMaybe<Scalars['String']>;
  readonly email?: InputMaybe<Scalars['String']>;
  readonly password?: InputMaybe<Scalars['String']>;
};

export type Query = {
  readonly __typename: 'Query';
  readonly users: Maybe<ReadonlyArray<User>>;
  readonly user: Maybe<User>;
  readonly usersCount: Maybe<Scalars['Int']>;
  readonly posts: Maybe<ReadonlyArray<Post>>;
  readonly post: Maybe<Post>;
  readonly postsCount: Maybe<Scalars['Int']>;
  readonly tags: Maybe<ReadonlyArray<Tag>>;
  readonly tag: Maybe<Tag>;
  readonly tagsCount: Maybe<Scalars['Int']>;
  readonly forms: Maybe<ReadonlyArray<Form>>;
  readonly form: Maybe<Form>;
  readonly formsCount: Maybe<Scalars['Int']>;
  readonly keystone: KeystoneMeta;
  readonly authenticatedItem: Maybe<AuthenticatedItem>;
};


export type QueryusersArgs = {
  where?: UserWhereInput;
  orderBy?: ReadonlyArray<UserOrderByInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryuserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryusersCountArgs = {
  where?: UserWhereInput;
};


export type QuerypostsArgs = {
  where?: PostWhereInput;
  orderBy?: ReadonlyArray<PostOrderByInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QuerypostArgs = {
  where: PostWhereUniqueInput;
};


export type QuerypostsCountArgs = {
  where?: PostWhereInput;
};


export type QuerytagsArgs = {
  where?: TagWhereInput;
  orderBy?: ReadonlyArray<TagOrderByInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QuerytagArgs = {
  where: TagWhereUniqueInput;
};


export type QuerytagsCountArgs = {
  where?: TagWhereInput;
};


export type QueryformsArgs = {
  where?: FormWhereInput;
  orderBy?: ReadonlyArray<FormOrderByInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryformArgs = {
  where: FormWhereUniqueInput;
};


export type QueryformsCountArgs = {
  where?: FormWhereInput;
};

export type AuthenticatedItem = User;

export type KeystoneMeta = {
  readonly __typename: 'KeystoneMeta';
  readonly adminMeta: KeystoneAdminMeta;
};

export type KeystoneAdminMeta = {
  readonly __typename: 'KeystoneAdminMeta';
  readonly enableSignout: Scalars['Boolean'];
  readonly enableSessionItem: Scalars['Boolean'];
  readonly lists: ReadonlyArray<KeystoneAdminUIListMeta>;
  readonly list: Maybe<KeystoneAdminUIListMeta>;
};


export type KeystoneAdminMetalistArgs = {
  key: Scalars['String'];
};

export type KeystoneAdminUIListMeta = {
  readonly __typename: 'KeystoneAdminUIListMeta';
  readonly key: Scalars['String'];
  readonly itemQueryName: Scalars['String'];
  readonly listQueryName: Scalars['String'];
  readonly hideCreate: Scalars['Boolean'];
  readonly hideDelete: Scalars['Boolean'];
  readonly path: Scalars['String'];
  readonly label: Scalars['String'];
  readonly singular: Scalars['String'];
  readonly plural: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly initialColumns: ReadonlyArray<Scalars['String']>;
  readonly pageSize: Scalars['Int'];
  readonly labelField: Scalars['String'];
  readonly fields: ReadonlyArray<KeystoneAdminUIFieldMeta>;
  readonly initialSort: Maybe<KeystoneAdminUISort>;
  readonly isHidden: Scalars['Boolean'];
};

export type KeystoneAdminUIFieldMeta = {
  readonly __typename: 'KeystoneAdminUIFieldMeta';
  readonly path: Scalars['String'];
  readonly label: Scalars['String'];
  readonly isOrderable: Scalars['Boolean'];
  readonly isFilterable: Scalars['Boolean'];
  readonly fieldMeta: Maybe<Scalars['JSON']>;
  readonly viewsIndex: Scalars['Int'];
  readonly customViewsIndex: Maybe<Scalars['Int']>;
  readonly createView: KeystoneAdminUIFieldMetaCreateView;
  readonly listView: KeystoneAdminUIFieldMetaListView;
  readonly itemView: Maybe<KeystoneAdminUIFieldMetaItemView>;
  readonly search: Maybe<QueryMode>;
};


export type KeystoneAdminUIFieldMetaitemViewArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type KeystoneAdminUIFieldMetaCreateView = {
  readonly __typename: 'KeystoneAdminUIFieldMetaCreateView';
  readonly fieldMode: KeystoneAdminUIFieldMetaCreateViewFieldMode;
};

export type KeystoneAdminUIFieldMetaCreateViewFieldMode =
  | 'edit'
  | 'hidden';

export type KeystoneAdminUIFieldMetaListView = {
  readonly __typename: 'KeystoneAdminUIFieldMetaListView';
  readonly fieldMode: KeystoneAdminUIFieldMetaListViewFieldMode;
};

export type KeystoneAdminUIFieldMetaListViewFieldMode =
  | 'read'
  | 'hidden';

export type KeystoneAdminUIFieldMetaItemView = {
  readonly __typename: 'KeystoneAdminUIFieldMetaItemView';
  readonly fieldMode: Maybe<KeystoneAdminUIFieldMetaItemViewFieldMode>;
};

export type KeystoneAdminUIFieldMetaItemViewFieldMode =
  | 'edit'
  | 'read'
  | 'hidden';

export type KeystoneAdminUISort = {
  readonly __typename: 'KeystoneAdminUISort';
  readonly field: Scalars['String'];
  readonly direction: KeystoneAdminUISortDirection;
};

export type KeystoneAdminUISortDirection =
  | 'ASC'
  | 'DESC';

export interface TSGQLDocuments extends Record<string, import('@ts-gql/tag').TypedDocumentNode<import('@ts-gql/tag').BaseDocumentTypes>> {}

export type TSGQLRequiredFragments<T> = (providedFragments: T) => T;