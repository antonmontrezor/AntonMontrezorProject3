import soccerLeagues from './soccerLeagues';

// displaying leagues section and attaching an event listener to each button
// when user clicks on a button, handleClick function will be called and a unique league id will be passed to it as an argument 
const Main = ({ handleClick }) => {
    return (
        <section className="leagues">
            <h2>Top 5 European Soccer Leagues</h2>
            <ul>
                {
                    soccerLeagues.map((league) => {
                        return (
                            <li key={league.id}>
                                <button onClick={() => handleClick(league.id)}>
                                    <img src={league.logo.url} alt={league.logo.altText} />
                                </button>
                            </li>
                        );
                    })
                }  
            </ul>
            <p>Click on league's image to see teams' standings for the current season!</p>
        </section>
    );
};

export default Main;
