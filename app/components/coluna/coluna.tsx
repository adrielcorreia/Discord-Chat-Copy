import "../../styles/coluna-styles/coluna.css";
import "bootstrap-icons/font/bootstrap-icons.css";

interface ColunaProps {
    nome: string;
    titulo: string;
    topico: string;
    assunto: string;
    musica: string;
    status: string;
  }
  
  export function Coluna(props: ColunaProps) {
    return (
  
        <div className="coluna-container">
         
          <div className="coluna-titulo">
                <h1 id="nome">{props.titulo}</h1>
                <i id="seta" className="bi bi-chevron-down"></i>     
            </div>
          
          <div className="coluna-body">
  
            <div className="coluna-topico">
                <i className="bi bi-chevron-down"></i>
                <h1>{props.topico}</h1>
            </div>
  
            <div className="coluna-assunto">
                <i className="fa fa-hashtag fa-xs" style={{color: "#6b6b6b"}}></i>
                <h1>{props.assunto}</h1>
            </div>
  
            <div className="coluna-music">
                <i className="bi bi-volume-up"></i>
                <h1>{props.musica}</h1>
            </div>
  
            <div className="coluna-topico">
                <i className="bi bi-chevron-down"></i>
                <h1>{props.topico}</h1>
            </div>
  
            <div className="coluna-assunto">
                <i className="fa fa-hashtag fa-xs" style={{color: "#6b6b6b"}}></i>
                <h1>{props.assunto}</h1>
            </div>
  
            <div className="coluna-assunto">
                <i className="fa fa-hashtag fa-xs" style={{color: "#6b6b6b"}}></i>
                <h1>{props.assunto}</h1>
            </div>
  
          </div>
  
          <div className="coluna-perfil">
  
            <div className="perfil-container">
                <img
                 src={"https://www.w3schools.com/howto/img_avatar.png"}
                 width="100%"
                 border-radius="60px"
                />
                <div className="perfil-info">
                    <span id="nome">{props.nome}</span>
                    <span>{props.status}</span>
                </div>
            </div>
  
            
  
            <div className="perfil-icones">
                <i className="bi bi-mic-fill"></i>
                <i className="bi bi-headphones"></i>
                <i className="bi bi-gear-fill"></i>
            </div>
  
          </div>  
  
        </div>
    )
  
  }