import * as auth from './auth';
import * as home from './home';
import * as orders from './orders';

export default {
  ...auth,
  ...home,
  ...orders,
};
