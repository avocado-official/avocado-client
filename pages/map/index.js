import Map from '../../components/Map'
import Head from 'next/head'
import Layout from '../../components/layout/layout'

export default function MapComp() {
  return (
    <div>
      <Head />
      <Layout headerTitle='نقشه'>
        <Map />
      </Layout>
    </div>
  )
}
