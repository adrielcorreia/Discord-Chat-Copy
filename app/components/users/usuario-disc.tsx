import "../../styles/users-styles/usuario-disc.css"

interface UsuarioProps {
    username: string;
    icon: string;
    activity?: string;
    app?: string;
    bot: boolean;
}

export function Usuario(props: UsuarioProps){
    return(
            <div className="user-content"> 
                <div className="user-icon">
                    <img src={props.icon} width="100%"/>
                </div>
                
                <div className="verify-bot">
                    {props.bot === false ? (
                    <div className="user-info">
                        <span className="user-username">{props.username}</span>
                        <span className="user-activity">{props.activity} <span className="user-activity-app"><strong>{props.app}</strong></span></span>
                    </div>
                ) : (
                    <div className="user-info">
                        <span className="user-username">{props.username}<span className="bot-check"> ✔BOT</span></span>
                        <span className="user-activity">{props.activity} <span className="user-activity-app"><strong>{props.app}</strong></span></span>
                    </div>
                )}
                </div>
            </div>
    )
}
