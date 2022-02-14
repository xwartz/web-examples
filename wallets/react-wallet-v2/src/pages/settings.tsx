import PageHeader from '@/components/PageHeader'
import { wallet } from '@/utils/WalletUtil'
import { Card, Divider, Row, Switch, Text, useTheme } from '@nextui-org/react'
import { useTheme as useNextTheme } from 'next-themes'
import { Fragment } from 'react'

export default function SettingsPage() {
  const { setTheme } = useNextTheme()
  const { isDark, type } = useTheme()

  return (
    <Fragment>
      <PageHeader>Settings</PageHeader>
      <Text h4 css={{ marginBottom: '$5' }}>
        Mnemonic
      </Text>
      <Card bordered borderWeight="light">
        <Text css={{ fontFamily: '$mono' }}>{wallet.mnemonic.phrase}</Text>
      </Card>

      <Text css={{ color: '$yellow500', marginTop: '$5', textAlign: 'center' }}>
        Warning: mnemonic is provided for development purposes only and should not be used
        elsewhere!
      </Text>

      <Divider y={3} />

      <Text h4 css={{ marginBottom: '$5' }}>
        Testnets
      </Text>
      <Row justify="space-between" align="center">
        <Switch /> <Text>Dissabled</Text>
      </Row>

      <Divider y={3} />

      <Text h4 css={{ marginBottom: '$5' }}>
        Theme
      </Text>
      <Row justify="space-between" align="center">
        <Switch checked={isDark} onChange={e => setTheme(e.target.checked ? 'dark' : 'light')} />{' '}
        <Text>{type}</Text>
      </Row>
    </Fragment>
  )
}
