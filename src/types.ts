export enum ConnectorNames {
  Injected = "injected",
  WalletConnect = "walletconnect",
  BSC = "bsc",
}

export type Login = (connectorId: ConnectorNames) => Promise<void>;

export interface Config {
  id: number;
  name: string;
  icon: any;
  connectorId: ConnectorNames;
}
