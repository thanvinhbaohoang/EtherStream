import React from 'react';
import '../App.css'


class UnauthorizedPage extends React.PureComponent {
  render() {
    return (
      <div class = "unauthorized-page">
        <h1> You Are Not Subscribed</h1>
        <h2> Please Stream SuperToken to the Address Below :D</h2>
        <p> 0x45c01ceb87dbe6807ebecb9161408fc5c6acb5d1</p>
      </div>
    )
  }
}

export default UnauthorizedPage;