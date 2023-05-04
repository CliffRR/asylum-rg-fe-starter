import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  // useHistory,
  Switch,
} from 'react-router-dom';

import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import { useAuth0 } from '@auth0/auth0-react';

import 'antd/dist/antd.less';
import { NotFoundPage } from './components/pages/NotFound';
import { LandingPage } from './components/pages/Landing';
import { ProfilePage } from './components/pages/Profile';
import LoadingComponent from './components/common/LoadingComponent';

import { FooterContent, SubFooter } from './components/Layout/Footer';
import { HeaderContent } from './components/Layout/Header';

// import { TablePage } from './components/pages/Table';

import { Layout } from 'antd';
import GraphsContainer from './components/pages/DataVisualizations/GraphsContainer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './state/reducers';
import { colors } from './styles/data_vis_colors';

import './styles/RenderLandingPage.less';

const { primary_accent_color } = colors;

const store = configureStore({ reducer: reducer });
ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById('root')
);

export function App() {
  const { Footer, Header } = Layout;

  const { isLoading } = useAuth0();

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <Layout>
      <Header
        style={{
          height: '10vh',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: primary_accent_color,
        }}
      >
        <HeaderContent />
      </Header>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/graphs" component={GraphsContainer} />
        <Route path="/profile-page" component={ProfilePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <div className="footer-section">
        <Footer
          style={{
            backgroundColor: primary_accent_color,
            color: '#E2F0F7',
          }}
        >
          <FooterContent />
        </Footer>
        <Footer
          style={{
            backgroundColor: primary_accent_color,
            padding: 0,
          }}
        >
          <SubFooter />
        </Footer>
      </div>
    </Layout>
  );
}
