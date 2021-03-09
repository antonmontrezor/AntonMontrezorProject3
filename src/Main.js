import bundesligaLogo from './assets/bundesliga-logo.png';
import premierLeagueLogo from './assets/premier-league-logo.png';
import serieALogo from './assets/serie-a-logo.png';
import laLigaLogo from './assets/la-liga-logo.png';
import franceLeagueLogo from './assets/france-league-logo.png';

const Main = ({leaguesIds, handleClick}) => {
    return (
        <div className="container">
            <ul>
                <li>
                    <a href="#" onClick={() => handleClick(leaguesIds[0])}>
                        <img src={bundesligaLogo} alt="A logo of the Bundesliga portraying a man kicking a ball on red background"/>
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => handleClick(leaguesIds[1])}>
                        <img src={premierLeagueLogo} alt="A logo of the English Premiere League portraying a crowned lion "/>
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => handleClick(leaguesIds[2])}>
                        <img src={serieALogo} alt="A logo of the Serie A portraying a blue letter 'A'"/>
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => handleClick(leaguesIds[3])}>
                        <img src={laLigaLogo} alt="A logo of the La Liga portraying a ball in the center of rainbow colored circle"/>
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => handleClick(leaguesIds[4])}>
                        <img src={franceLeagueLogo} alt="A logo of the France League 1 portraying a yellow circle-like geometric figure with a white round dot inside and a sponsor, Uber Eats, below"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Main;