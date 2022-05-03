import Icon1 from '../../assets/images/connect/1.svg'
import Icon2 from '../../assets/images/connect/2.svg'

import { Config, ConnectorNames } from "../../types";

export const connections: Config[] = [
    {
        id  : 0,
        name: 'Metamask',
        icon: Icon1,
        connectorId: ConnectorNames.Injected,
    },
    {
        id  : 1,
        name: 'Wallet Connect',
        icon: Icon2,
        connectorId: ConnectorNames.WalletConnect,
    },
    // {
    //     id  : 2,
    //     name: 'Coinbase Wallet',
    //     icon: Icon3,
    //     connectorId: ConnectorNames.Injected,
    // },
    // {
    //     id  : 3,
    //     name: 'Fortmatic',
    //     icon: Icon4,
    //     connectorId: ConnectorNames.Injected,
    // },
    // {
    //     id  : 4,
    //     name: 'Portis',
    //     icon: Icon5,
    //     connectorId: ConnectorNames.Injected,
    // }
];

export const connectorLocalStorageKey = "connectorId";