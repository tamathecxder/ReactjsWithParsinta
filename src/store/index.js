import axios from 'axios'
import { atom, selector } from 'recoil';

const theme = atom({
  key: 'switching-theme',
  default: 'light',
});

const authUser = selector({
  key: 'authenticate-user',
  get: async() => {
    let user = null;

    try {
      let { data } = await axios.get('http://jsonplaceholder.typicode.com/users/5');
      user = {user: data}
    } catch(e) {
      user = {user: e.message}
    }

    return user;
  }
})

export { authUser, theme } 