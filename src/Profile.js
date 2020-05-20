import React, { Component } from 'react';

import './Profile.css';

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      username: 'Will Smith',
      bio: 'Senior UI Designer',
      description: 'I design websites and applications for the web.',
      avatar: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTF_erFD1SeUnxEpvFjzBCCDxLvf-wlh9ZuPMqi02qGnyyBtPWdE-3KoH3s',
      likes: 999,
      followers: 888,
      friends: 777,
    }
    
  }

  render() {
    return (
      <div className="user-profile">
        <img className="avatar" src={this.state.avatar} alt="Ash" />
        <div className="username">{this.state.username}</div>
        <div className="bio">{this.state.bio}</div>
        <div className="description">{this.state.description}</div>
        <ul className="data">
          <li>
            <span className="entypo-heart"> {this.state.likes}</span>
          </li>
          <li>
            <span className="entypo-eye"> {this.state.followers}</span>
          </li>
          <li>
            <span className="entypo-user"> {this.state.friends}</span>
          </li>
        </ul>
      </div>
    )
  }
}

export default Profile;