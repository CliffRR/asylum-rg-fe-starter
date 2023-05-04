import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';
import AuthenticationButton from '../common/authentication-button.js';
import { useAuth0 } from '@auth0/auth0-react';
import { colors } from '../../styles/data_vis_colors';
import '../../styles/RenderLandingPage.less';

const { primary_accent_color } = colors;

function HeaderContent() {
  const { isAuthenticated } = useAuth0();

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'flex-start',
          paddingTop: '30px',
        }}
      >
        <div className="hrf-logo">
          <a href="https://www.humanrightsfirst.org/">
            <Image
              width={100}
              src={Logo}
              preview={false}
              alt="HRF logo white"
            />
          </a>
        </div>
        <Link
          to="/"
          style={{
            color: '#E2F0F7',
            paddingLeft: '50px',
            paddingRight: '50px',
          }}
        >
          Home
        </Link>

        <Link to="/graphs" style={{ color: '#E2F0F7', paddingRight: '50px' }}>
          Graphs
        </Link>

        {isAuthenticated ? (
          <Link to="/profile-page" style={{ color: '#E2F0F7' }}>
            Profile Page
          </Link>
        ) : null}
      </div>
      <div className="btn-container">
        <AuthenticationButton />
      </div>
    </div>
  );
}

export { HeaderContent };
