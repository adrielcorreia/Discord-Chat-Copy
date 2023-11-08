import Image from 'next/image'
import styles from './page.module.css'
import Nav_lateral from './components/nav_lateral'
import Nav_central from './components/nav_central'

export default function Home() {
  return (
    <main>
      <Nav_central />
      <Nav_lateral />
    </main>
  )
}

