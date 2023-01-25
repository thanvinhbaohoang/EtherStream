import React, { Component } from 'react';
import { ethers } from 'ethers';
import { Framework } from "@superfluid-finance/sdk-core";
import "../../css/flowInfo.css"
import { DashboardTable } from './Dashboard';
import { BeforeConnect } from "../BeforeConnect";

class FlowInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fDaixBalance:0,
      account: '',
      tokensInfo: []
    }

    //this.getTokensInfo = this.getTokensInfo.bind(this)
    //this.getTokenBalance= this.getTokenBalance.bind(this)
  }

  async componentDidMount(){
    // await this.getWalletBalance()
    this.timerID = setInterval(
      () => {
        if (this.props.connected) {
          this.getTokensInfo();
        }
      }, 1000
    );
  };

  async getWalletBalance(){
    // Load account
    const accounts = await ethereum.request({ method: "eth_accounts" });
    const account = accounts[0];

    if (account !== undefined) {
      this.setState({ 
        account: account,
      })
    }
    else{
      this.props.setConnected(false);
      this.setState({account: "",});
    }
  }

  // For now we will stick with FDAIx as default tokenName
  async getTokenBalance(tokenName) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const accounts = await ethereum.request({ method: "eth_accounts" });
      const account = accounts[0]
      const chainId = await window.ethereum.request({ method: "eth_chainId" });

      const sf = await Framework.create({
        chainId: Number(chainId),
        provider: provider
      });

      //load the token you'd like to use like this (note that tokens may be loaded by symbol or by address)
      const superToken = await sf.loadSuperToken(tokenName);

      // const fDAIxAddress= superToken.address;
      // ================================================================
      // Netflow
      let netFlow = await superToken.getFlow({
        sender: account,
        receiver: 'Services Wallet Address',
        providerOrSigner: signer
      });

      return netFlow;
  }

  render() {
    return (
      <div>
        {
        this.props.connected
        ? <div className="flowInfoContainer"> {DashboardTable(this.state.tokensInfo)}</div>
        : <BeforeConnect/>
        }

          {/* <button onClick={this.getTokensInfo}>
            Fetch Tokens Data
          </button> */}
          {/* <div className="flowInfoContainer">
            <p>Your current fDAIx: {this.state.fDaixBalance}</p>
            <p>Your current netFlow: {this.state.fDaixNetflow} wei/second</p>
          </div> */}
      </div>
    );
  }
}
  
export default FlowInfo;