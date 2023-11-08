import Image from 'next/image'
import styles from './styles/page.module.css'
import './styles/main.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <aside className='darkgray servers'></aside>

      <aside className='gray canais'>

      </aside>

      <header className='lightgray header'>

      </header>
      
      <aside className='lightgray chat-container'>

      </aside>
      <aside className='gray lista-de-membros'></aside>
    </main>
  )
}
