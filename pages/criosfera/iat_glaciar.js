import Head from 'next/head'
import Layout from '../../src/layout';
import IATGlaciar from '../../src/lineas/criosfera/proyectos/iat_glaciar/iat_glaciar';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Criósfera, Clima y Seguridad Hídrica</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IATGlaciar />
    </Layout>
  )
}