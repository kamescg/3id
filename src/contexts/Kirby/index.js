import * as React from "react";
import { KirbyProvider, KirbyContext, IKirbyContext, useSelector } from "@kirby-web3/parent-react";
import { EthereumParentPlugin } from "@kirby-web3/plugin-ethereum";

const MyComponent = () => {
  const ctx = React.useContext(KirbyContext);
  const ethereumPlugin = ctx.kirby.plugins.ethereum;

  const kirbyData = useSelector((state) => {
    return {
      readonly: state.ethereum.readonly,
      account: state.ethereum.account,
    };
  });

  async function requestSign() {
    const accts = await ethereumPlugin.getAccounts();
    const web3 = ethereumPlugin.web3;
    const result = await web3.eth.personal.sign("hello", accts[0]);
    console.log("signature:", result);
    return result;
  }

  return (
    <div>
      <div>web3: {kirbyData.readonly ? "read only" : "signer available"}</div>
      <div>account: {kirbyData.account}</div>
      <div>
        <button onClick={async () => ethereumPlugin.requestSignerWeb3()}>request signer web3 </button>
      </div>
      <div>{!kirbyData.readonly ? <button onClick={async () => requestSign()}>web3 sign</button> : null}</div>
    </div>
  );
};

const config = {

};

const plugins = [new EthereumParentPlugin()];

const App = props => {
  return (
    <div className="App">
      <KirbyProvider plugins={plugins} config={config}>
        <MyComponent />
      </KirbyProvider>
    </div>
  );
};

export default App;