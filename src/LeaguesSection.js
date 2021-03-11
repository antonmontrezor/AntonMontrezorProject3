import footballLeagues from './footballLeagues';

// displaying leagues section and attaching an event listener to each anchor tag
// when user clicks on an anchor tag, handleClick function will be called and a unique league id will be passed to it as an argument 
const Main = ({ handleClick }) => {
    return (
        <section className="leagues">
            <h2>Top 5 European Football Leagues</h2>
            <ul>
                {
                    footballLeagues.map((league) => {
                        return (
                            <li key={league.id}>
                                <a href='#' onClick={() => handleClick(league.id)}>
                                    <img src={league.logo.url} alt={league.logo.altText} />
                                </a>
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
