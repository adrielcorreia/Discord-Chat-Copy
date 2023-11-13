import Image from 'next/image'
import '../../styles/nav-styles/nav_lateral.css'

export default function Nav_lateral() {
  return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark d-inline-block">
            <ul className="navbar-nav flex-column px-2 nvv">
                <li className="nav-item">
                <a href="" className="nav-link">
                    <h2 className="fa-brands fa-discord flex center"></h2>
                    <div className="point"></div>
                </a>
                </li>

                <li className="nav-item">
                <a href="" className="nav-link">
                    <h2 className="fa-solid fa-circle-user flex center"></h2>
                    <div className="point"></div>
                </a>
                </li>
                <li className="nav-item">
                <a href="" className="nav-link">
                    <h2 className="fa-solid fa-circle-user flex center"></h2>
                    <div className="point"></div>
                </a>
                </li>
                <li className="nav-item">
                    <a href="" className="nav-link">
                        <div className="circleIconButton flex center" aria-label="Adicionar um servidor" role="treeitem" data-list-item-id="guildsnav___create-join-button"><svg className="circleIcon__428dd" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"></path></svg></div>
                        <div className="point"></div>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="" className="nav-link">
                        <div className="circleIconButton flex center" aria-label="Explorar servidores do Descobrir" role="treeitem" data-list-item-id="guildsnav___guild-discover-button"><svg aria-hidden="true" role="img" className="circleIcon__428dd" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z"></path></svg></div>
                        <div className="point"></div>
                    </a>
                </li>
            </ul>
        </nav>
  )
}