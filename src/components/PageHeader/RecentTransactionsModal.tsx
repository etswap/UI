import React, { useMemo } from 'react'
import { CheckmarkCircleIcon, ErrorIcon, Flex, LinkExternal, Text, Modal, Button } from 'uikit'
import { useActiveWeb3React } from 'hooks'
import { getBscScanLink } from 'utils'
import { isTransactionRecent, useAllTransactions } from 'state/transactions/hooks'
import { TransactionDetails } from 'state/transactions/reducer'
import Loader from 'components/Loader'
import useIntl from 'hooks/useIntl'

type RecentTransactionsModalProps = {
  onDismiss?: () => void
  translateString: (translationId: number, fallback: string) => string
}

// TODO: Fix UI Kit typings
const defaultOnDismiss = () => null

const newTransactionsFirst = (a: TransactionDetails, b: TransactionDetails) => b.addedTime - a.addedTime

const getRowStatus = (sortedRecentTransaction: TransactionDetails) => {
  const { hash, receipt } = sortedRecentTransaction

  if (!hash) {
    return { icon: <Loader />, color: 'text' }
  }

  if (hash && receipt?.status === 1) {
    return { icon: <CheckmarkCircleIcon color="greenColor" />, color: 'greenColor' }
  }

  return { icon: <ErrorIcon color="failure" />, color: 'failure' }
}

const RecentTransactionsModal = ({ onDismiss = defaultOnDismiss, translateString }: RecentTransactionsModalProps) => {
  const { account, chainId } = useActiveWeb3React()
  const allTransactions = useAllTransactions()
  const intl = useIntl()

  // Logic taken from Web3Status/index.tsx line 175
  const sortedRecentTransactions = useMemo(() => {
    const txs = Object.values(allTransactions)
    return txs.filter(isTransactionRecent).sort(newTransactionsFirst)
  }, [allTransactions])

  return (
    <Modal title={intl('swap.recentTransactions', 'Recent transactions')} onDismiss={onDismiss} bodyPadding="0 24px 24px">
      {!account && (
        <Flex justifyContent="center" flexDirection="column" alignItems="center">
          <Text mb="60px" bold color="#4238C3">
            {intl('swap.connectWalletInfo', 'Please connect your wallet to view your recent transactions')}
          </Text>
          <Button variant="primary" scale="sm" onClick={onDismiss} style={{height: '40px', borderRadius: '25px', padding: '0 25px'}}>
            {intl('global.close', 'Close')}
          </Button>
        </Flex>
      )}
      {account && chainId && sortedRecentTransactions.length === 0 && (
        <Flex justifyContent="center" flexDirection="column" alignItems="center">
          <Text mb="60px" bold color="#4238C3" style={{width: '100%'}}>
            {intl('pool.noTransactions', 'No recent transactions')}
          </Text>
          <Button variant="primary" scale="sm" onClick={onDismiss} style={{height: '40px', borderRadius: '20px', padding: '0 25px'}}>
            {intl('global.close', 'Close')}
          </Button>
        </Flex>
      )}
      {account &&
        chainId &&
        sortedRecentTransactions.map((sortedRecentTransaction) => {
          const { hash, summary } = sortedRecentTransaction
          const { icon, color } = getRowStatus(sortedRecentTransaction)

          return (
            <>
              <Flex key={hash} alignItems="center" justifyContent="space-between" mb="4px">
                <LinkExternal href={getBscScanLink(chainId, hash, 'transaction')} color={color}>
                  {summary ?? hash}
                </LinkExternal>
                {icon}
              </Flex>
            </>
          )
        })}
    </Modal>
  )
}

export default RecentTransactionsModal
