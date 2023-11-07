import './styles/main.css'
import Chat from './components/chat'
import Image from 'next/image'
import styles from './styles/page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <aside className='darkgray servers'>

      </aside>


      <aside className='gray canais'>

      </aside>


      <header className='lightgray header'>
        
      </header>


      <aside className='lightgray chat-container'>
        <Chat></Chat>
      </aside>


      <aside className='gray lista-de-membros'>

      </aside>
    </main>
  )
}
