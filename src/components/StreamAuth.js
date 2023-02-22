import { Component } from "react";
import axios from "axios";

class StreamAuth extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        isStreamAuthenticated: "Checking...",
        address: ""
      };
      this.tokenStreamAuthentication = this.tokenStreamAuthentication.bind(this);
    }
  

    componentDidMount() {
      console.log("componentDidMount: TOKEN STREAM AUTHENTICATION");
    //   this.setState({address: walletAddress})
      this.tokenStreamAuthentication()
    }
  
  
    // For now we will stick with FDAIx as default tokenName
    async tokenStreamAuthentication(){
        console.log("address:", this.state.address);
        //GraphQL Query (https://console.superfluid.finance/subgraph?_network=goerli)
        const TOKENS_QUERY =
        `
        query {
          streams(where:{
                sender: "userAddress Here"
                receiver: "0x45c01ceb87dbe6807ebecb9161408fc5c6acb5d1" 
                }
              ) {
            currentFlowRate
            token 
            {
              symbol
            }
          }
        }
        `
    
        const queryResult = await axios({
          url: 'https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-goerli',
          method: 'post',
          data: {
            query: TOKENS_QUERY
          }
    
        })
    
        console.log("QUERY RESULT DATA:", queryResult.data.data)
    
        // LAZY WAY TO CHECK IF STREAM EXISTS
        // Check Streams from Address to `ServiceProviderAddress` 
        // Iterate All Streams And If Even 1 Stream   
          // Return True if >= Service Fee
        const streams = queryResult.data.data.streams
        streams.map( stream => {
          if (stream.currentFlowRate > 0) {
            console.log("Authenticated STREAM:", stream)
            this.setState({ isStreamAuthenticated: true })
            // return true
          }
        })
    
        // Return False if-else
        console.log("tokenStreamAuthentication: FALSE");
        this.setState({ isStreamAuthenticated: false })
        // return false
    }
    

    render() {
      return (
        <div>
            <p>Address:{this.state.address}</p>
          <button>{this.state.isStreamAuthenticated? "Subscribed" : "Not Subscribed"}</button>
        </div>
      );
    }
  }
  
  export default StreamAuth;