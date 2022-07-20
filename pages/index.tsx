import type { NextPage } from 'next'
import Banner from '../src/components/Homepage/Banner'
import Header from '../src/components/Homepage/Header'
import WeDealIn from '../src/components/Homepage/WeDealIn'
import WhyUs from '../src/components/Homepage/WhyUs'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Banner />
      <main id={styles.mainContent}>
        <WhyUs />
        <WeDealIn />
      </main>
    </div>
  )
}

export default Home
