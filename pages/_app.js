import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Provider } from 'react-redux';
import { useStore } from '../store';
import { ConfigProvider } from 'antd';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <ConfigProvider direction="rtl">
        <Component {...pageProps} />
      </ConfigProvider>
    </Provider>
  );
}

export default MyApp;
