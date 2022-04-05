import React from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import LinkExternal from "../../components/Link/LinkExternal";
import Flex from "../../components/Box/Flex";
import { Modal } from "../Modal";
import CopyToClipboard from "./CopyToClipboard";
import { connectorLocalStorageKey } from "./config";

interface Props {
  account: string;
  logout: () => void;
  onDismiss?: () => void;
}


export const NETWORK_CHAIN_ID: number = parseInt(process.env.REACT_APP_CHAIN_ID ?? '66')
const AccountModal: React.FC<Props> = ({ account, logout, onDismiss = () => null }) => (
  <Modal title="Your wallet" onDismiss={onDismiss} bodyPadding='0 24px 24px'>
    <Text
      fontSize="16px"
      bold
      color='#4238C3'
      style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" }}
    >
      {account}
    </Text>
    <Flex mb="50px">
      <LinkExternal small href={`https://blockscout.com${ NETWORK_CHAIN_ID === 66 ? '' : '/okexchain-test'}/address/${account}`} mr="16px">
        View on okLink
      </LinkExternal>
      <CopyToClipboard toCopy={account}>Copy Address</CopyToClipboard>
    </Flex>
    <Flex justifyContent="center">
      <Button
        scale="sm"
        variant="secondary"
        height='38px'
        style={{borderRadius: '20px'}}
        onClick={() => {
          logout();
          window.localStorage.removeItem(connectorLocalStorageKey);
          onDismiss();
        }}
      >
        Logout
      </Button>
    </Flex>
  </Modal>
);

export default AccountModal;
