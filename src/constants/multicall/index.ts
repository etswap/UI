import { ChainId } from '@etcswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x74780EfE30E584FA946898314C5c15390F6FF310',
  [ChainId.OKT]: '0xBd09DF438AccA57476BcFe70A333B3204DB4C6e7',
}

export { MULTICALL_ABI, MULTICALL_NETWORKS } 
 