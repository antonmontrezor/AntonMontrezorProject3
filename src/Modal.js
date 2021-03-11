const Modal = ({ leagueData, modal, setModal }) => {
    return (
        //if modal state is false, hide modal window, otherwise, make it visible
        <section className={`modal ${modal ? null : 'hidden'}`}>
            {
                //if API data is an array of objects, show that mapped data
                //if API sends an empty array, show a notification to a user
                leagueData.length !== 0 
                ?   <>
                        <h2>Standings:</h2>
                        <button className='closeModal' onClick={() => setModal(!modal)}></button>
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th>Club</th>
                                    <th className='points'>Pts</th>
                                    <th className='lastFive'>Last 5</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    //mapping through a leagues array to get a specific league and display its necessary properties
                                    leagueData.map((club) => {
                                        return (
                                            <tr key={club.position}>
                                                <td>{club.position}</td>
                                                <td>
                                                    <img src={club.team.crestUrl} alt='A team`s logo' />
                                                </td>
                                                <td>{club.team.name}</td>
                                                <td>{club.points}</td>
                                                <td>{club.form}</td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </>
                : <h2>Unfortunately, data cannot be loaded at this point. Please, try again later.</h2>
            }
        </section>
    );
};

export default Modal;
