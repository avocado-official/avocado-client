import Head from 'next/head'
import Layout from '../components/layout/layout'
import Card from '../components/Card'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Goods</title>
      </Head>
      <Layout headerTitle='خانه'>
        <div>دیوار مهربانی آنلاین</div>
        <Card />
      </Layout>
    </div>
  )
}
