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
        <div style={{ fontSize: '14px' }}>دیوار مهربانی آنلاین</div>
        <Card
          img='https://lh3.googleusercontent.com/proxy/VfIQKMuF6bN864hL9BIvk1PaoIwD0pIJtNsQtZ0NwA_Y4E129wqXqYOxratIevZQUHGAkT0xjIFJr28Tiv8-K3suFhhu7uR1T47B1tQ3XQOaiWpVATcFhHUrVyAraAuiZscBVU4pcSSrx5w0DhYvb6zfw4gLKyF1Yi9-AWF8h9WB7UKj0dCll_8NJbhvBEPg_bySRU-ZB_nvMEAaQ03FDBRcGymf5H2ziO8v-w'
          title='کاهو وحشی'
          distance='7km'
        />
      </Layout>
    </div>
  )
}
