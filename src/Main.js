import leaguesData from './leaguesData';

const Main = ({handleClick}) => {
    console.log(leaguesData)
    return (
        <div className="container">
            <ul>
                {
                    leaguesData.map(league => {
                        return (
                            <li key={league.id}>
                                <a href="#" onClick={() => handleClick(league.id)}>
                                    <img src={league.logo.url} alt={league.logo.altText}/>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Main;