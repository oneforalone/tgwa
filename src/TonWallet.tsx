// import { TonConnectButton, TonConnectUIProvider } from "@tonconnect/ui-react";

// export function TonWallet() {
//   return (
//     <TonConnectUIProvider
//       manifestUrl="https://oneforalone.github.io/tgwa/tonconnect-manifest.json"
//       actionsConfiguration={{
//         twaReturnUrl: ""
//     }}></TonConnectUIProvider>
//   );
// }

// export const Header = () => {
//   return (
//     <header>
//       <span>Ton Wallet React APP</span>
//       <TonConnectButton />
//     </header>
//   );
// }

import './App.scss'
import {THEME, TonConnectUIProvider} from "@tonconnect/ui-react";
// import {Header} from "./components/Header/Header";
// import {TxForm} from "./components/TxForm/TxForm";
// import {Footer} from "./components/Footer/Footer";
// import {TonProofDemo} from "./components/TonProofDemo/TonProofDemo";

function TonWallet() {
  return (
      <TonConnectUIProvider
          manifestUrl="https://oneforalone.github.io/tgwa/tonconnect-manifest.json"
          uiPreferences={{ theme: THEME.DARK }}
          walletsListConfiguration={{
            includeWallets: [
              {
                appName: "tonwallet",
                name: "TON Wallet",
                imageUrl: "https://wallet.ton.org/assets/ui/qr-logo.png",
                aboutUrl: "https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd",
                universalLink: "https://wallet.ton.org/ton-connect",
                jsBridgeKey: "tonwallet",
                bridgeUrl: "https://bridge.tonapi.io/bridge",
                platforms: ["chrome", "android", "ios"]
              }
            ]
          }}
          actionsConfiguration={{
              twaReturnUrl: 'https://t.me/KikiVIIBot'
          }}
      >

      </TonConnectUIProvider>
  )
}

export default  TonWallet