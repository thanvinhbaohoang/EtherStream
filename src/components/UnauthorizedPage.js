import React from 'react';



class UnauthorizedPage extends React.PureComponent {
  render() {
    return (
      <div class='page'>
        <h1> You Are Not Subscribed</h1>
        <h2> Please Stream Any SuperToken to the Address Below to Subscribe :D</h2>
        <p> 0x45c01ceb87dbe6807ebecb9161408fc5c6acb5d1</p>
      </div>
    )
  }
}

export default UnauthorizedPage;