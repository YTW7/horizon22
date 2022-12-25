import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Community from '../components/Community'
import { useWallet } from '@solana/wallet-adapter-react'
import { PublicKey } from "@solana/web3.js";
import First from '../components/First'
import Aboutus from '../components/Aboutus'

export default function Home() {
  const { connected, publicKey } = useWallet()
  return (
    <div className={styles.container}>
      <Head>
        <title>PREP-UPSC | Platform for Cracking UPSC Exam</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar connected={connected} publicKey={publicKey}/>
      <First/>
      <Aboutus/>
      {/* <Sidebar/> */}
      <Community/>
      <br />
      <Footer/>
      <br />
    </div>
  )
}
