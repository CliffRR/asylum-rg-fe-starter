import React from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import '../../../styles/RenderProfilePage.less';
import LoadingComponent from '../../common/LoadingComponent';

const RenderProfilePage = () => {
  const { user } = useAuth0();
  const { picture, email, updated_at, email_verified } = user;

  return (
    <div className="profile-container" id="mid-section">
      <div className="name-text">
        <h2>Profile Info:</h2>
      </div>
      <div className="profile-header-container">
        <img src={picture} alt="Profile" className="profile-pic"></img>
      </div>
      <div className="text-background">
        <pre className="profile-text">
          Email: {email} <br></br>
          Email Verified: {email_verified ? 'true' : 'false'} <br></br>
          Picture: {picture} <br></br>
          Updated At: {updated_at}
          {/* {JSON.stringify(user, null, 2)} */}
        </pre>
      </div>
    </div>
  );
};

export default withAuthenticationRequired(RenderProfilePage, {
  onRedirecting: () => <LoadingComponent />,
});
