import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
   initialState: {
    productsList: [
      { name: 'dva', id: 1 },
      { name: 'antd', id: 2 },
      { name: 'football', id: 3 },
      { name: 'basketball', id: 4 }
    ],
  },
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/products').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
