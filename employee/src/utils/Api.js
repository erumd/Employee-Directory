// activity 19 from class

import axios from 'axios';

const RANDOMUSER = 'https://randomuser.me/api/';

// Export an object with a "search" method that searches the random user API for the passed query
export default {
  search: function (query) {
    return axios.get(RANDOMUSER + query);
  },
};
