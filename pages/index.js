import Head from 'next/head'
import Layout from '../components/layout/layout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Goods</title>
      </Head>
      <Layout headerTitle='خانه'>
        <div>دیوار مهربانی آنلاین</div>
      </Layout>
    </div>
  )
}
