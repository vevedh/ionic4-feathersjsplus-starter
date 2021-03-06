
// Configure the Feathers services. (Can be re-generated.)
import { App } from '../app.interface';
import authManagement from './auth-management/auth-management.service';
import emails from './emails/emails.service';
import loginProviders from './login-providers/login-providers.service';
import todos from './todos/todos.service';
import users from './users/users.service';

import graphql from './graphql/graphql.service';
// !code: imports // !end
// !code: init // !end

// tslint:disable-next-line:no-unused-variable
let moduleExports = function (app: App) {
  app.configure(authManagement);
  app.configure(emails);
  app.configure(loginProviders);
  app.configure(todos);
  app.configure(users);

  app.configure(graphql);
  // !code: func_return // !end
};

// !code: exports // !end
export default moduleExports;

// !code: funcs // !end
// !code: end // !end
