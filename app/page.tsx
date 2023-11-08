import './styles/main.css'
import Chat from './components/chat'
import Image from 'next/image'
import styles from './styles/page.module.css'
import { Coluna } from './components/coluna'
import { Usuario } from "./components/usuario-disc";
import Nav_lateral from './components/nav_lateral'
import Nav_central from './components/nav_central'

export default function Home() {
  return (
    <main className={styles.main}>
      <aside className='darkgray servers'>
        <Nav_lateral />
      </aside>

      <aside className='gray canais'>
        <Coluna
          nome="Lucas"
          titulo= "Softex"
          topico= "Sala"
          assunto= "turma"
          musica= "relaxando"
          status= "Disponivel"
          />
      </aside>

      <header className='lightgray header'>
        <Nav_central />
      </header>

      <aside className='lightgray chat-container'>
        <Chat></Chat>
      </aside>

      <aside className='gray lista-de-membros'>
        <aside className="user-container">
          <span className="user-on">Online</span>
          <Usuario 
            username="Ítalo Souto"
            icon="https://www.w3schools.com/howto/img_avatar.png"
            activity="Listening"
            app="Spotify"
            bot = {false}/>
          <Usuario 
            username="Lucas Texeira"
            icon="https://www.w3schools.com/howto/img_avatar.png"
            activity="Playing"
            app="Valorant"
            bot = {false}/>
          <Usuario 
            username="Adriel Correia"
            icon="https://www.w3schools.com/howto/img_avatar.png"
            activity="Listening"
            app="Spotify"
            bot = {false}/>
          <span className="user-off">Offline</span>
          <div className="user-offline">
          <Usuario 
            username="Rafeal Bezerra"
            icon="https://www.w3schools.com/howto/img_avatar.png"
        // activity="Listening" 
        // app="Spotify"
            bot = {false}
          />
          </div>
            <span className="user-bots">Bots</span>
          <div className="bots">
          <Usuario 
            username="MEE7"
            icon="https://cdn6.aptoide.com/imgs/8/d/8/8d891894f0ee4ece1ca2d9fb8aa3d96f_icon.png"
            bot = {true}
          />
          </div>
      
        </aside>
      </aside>
    </main>
  )
}