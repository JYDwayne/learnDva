import dva from 'dva';

export default {
  namespace: 'productsList',
  state: [],
  reducers: {
    'delete'(state, { payload: id }) {

      return state.filter(item => {

      	return item.id !== id
      });
    },
  },
};