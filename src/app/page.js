import Image from 'next/image'
import styles from './page.module.css'
import HeroSection from '@/components/HeroSection/HeroSection'
import TravelPlace from '@/components/TravelPlace/TravelPlace'

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <TravelPlace/>
    </main>
  )
}
