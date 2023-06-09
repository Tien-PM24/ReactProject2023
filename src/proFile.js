import React from 'react';

class Profile extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <img src={this.props.imageUrl} alt="Profile" />
      </div>
    );
  }
}

export default Profile;
