

import { config } from '@keystone-6/core';
import { lists } from './schema';
import { withAuth, session } from './auth';
import dotenv from 'dotenv';
dotenv.config();
const dbUrl =  process.env.POSTGRES_URL || `postgres://${process.env.USER}@localhost/${process.env.USER}`;
console.log('env loading:  -------:', process.env.POSTGRES_URL )

export default withAuth(
  config({
    db: {
      url: dbUrl,
      provider: 'postgresql',
      useMigrations: true,
    },

    ui: {
 
      isAccessAllowed: (context) => !!context.session?.data,
    },
    graphql:{
      cors:{
        origin: '*',
        credentials:true
      }
    },
    lists,
    session,
    server:{
      cors:{
        origin: '*',
        credentials:true
      }
    }
  
    

    
  })
);
