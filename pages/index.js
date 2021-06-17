import Head from 'next/head'
import Layout from '../components/layout/layout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Goods</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout headerTitle='Home'>
        <div>Goods</div>
      </Layout>
    </div>
  )
}
