const Modal = ({ leagueData, modal, setModal }) => {
    console.log(leagueData)

    return (
        <section className={`modal ${modal ? null : 'hidden'}`}>
            {
                leagueData.length !== 0 
                ?   <>
                        <h2>Standings:</h2>
                        <button className='closeModal' onClick={() => setModal(!modal)}></button>
                        <table className='league'>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th>Club</th>
                                    <th>Pts</th>
                                    <th>Last 5</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    leagueData.map((club) => {
                                        return (
                                            <tr key={club.position}>
                                                <td className='position'>{club.position}</td>
                                                <td>
                                                    <img src={club.team.crestUrl} className='teamLogo' alt='A team`s logo' />
                                                </td>
                                                <td className='team'>{club.team.name}</td>
                                                <td className='points'>{club.points}</td>
                                                <td className='currentForm'>{club.form}</td>
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
