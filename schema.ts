
import { list } from '@keystone-6/core';

import {
  text,
  integer,
  relationship,
  password,
  timestamp,
  select,
} from '@keystone-6/core/fields';

// custom ones.
import { document } from '@keystone-6/fields-document';

import { Lists } from '.keystone/types';
export const lists: Lists = {
  // Here we define the user list.
  User: list({

    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({
        validation: { isRequired: true },
        isIndexed: 'unique',
        isFilterable: true,
      }),
      password: password({ validation: { isRequired: true } }),

      posts: relationship({ ref: 'Post.author', many: true }),
      forms: relationship({
        ref: 'Form.editor',
        many: true,
      }),
    },

    ui: {
      listView: {
        initialColumns: ['name', 'posts'],
      },
    },
  }),

  Post: list({
    fields: {
      title: text(),
      status: select({
        options: [
          { label: 'Published', value: 'published' },
          { label: 'Draft', value: 'draft' },
        ],
        defaultValue: 'draft',
        ui: {
          displayMode: 'segmented-control',
        },
      }),
   
      content: document({
        formatting: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
          [2, 1],
          [1, 2],
          [1, 2, 1],
        ],
        links: true,
        dividers: true,
      }),
      publishDate: timestamp(),
      // Here is the link from post => author.
      // We've configured its UI display quite a lot to make the experience of editing posts better.
      author: relationship({
        ref: 'User.posts',
        ui: {
          displayMode: 'cards',
          cardFields: ['name', 'email'],
          inlineEdit: { fields: ['name', 'email'] },
          linkToItem: true,
          inlineConnect: true,
        },
      }),
      // We also link posts to tags. This is a many <=> many linking.
      tags: relationship({
        ref: 'Tag.posts',
        ui: {
          displayMode: 'cards',
          cardFields: ['name'],
          inlineEdit: { fields: ['name'] },
          linkToItem: true,
          inlineConnect: true,
          inlineCreate: { fields: ['name'] },
        },
        many: true,
      }),
    },
    
    
  }),

  Tag: list({
    ui: {
      isHidden: true,
    },
    fields: {
      name: text(),
      posts: relationship({ ref: 'Post.tags', many: true }),
    },
  }),
  Form: list({
    fields: {
      citation: text(),
      contentKind: integer(),
      description: text(),
      displayName: text(),
      canonicalRef: text(),
      editor: relationship({
        ref: 'User.forms',
        many: true,
      }),
    },
  })

};
