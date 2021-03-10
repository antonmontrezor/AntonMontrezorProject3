const Modal = ({ leagueData, modal, setModal }) => {
    return (
        <section className={`modal ${modal ? null : 'hidden'}`}>
            <h2>Standings:</h2>
            <button className='closeModal' onClick={() => setModal(!modal)}></button>
            <table className='league'>
                <thead>
                    <tr>
                        <th>Club</th>
                        <th></th>
                        <th></th>
                        <th>Pts</th>
                        <th>Last 5</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        leagueData.length !== 0 
                        ? leagueData.map((club) => {
                            return (
                                <tr key={club.position}>
                                    <td className='position'>{club.position}</td>
                                    <img src={club.team.crestUrl} className='teamLogo' alt='A team`s logo'/>
                                    <td className='team'>{club.team.name}</td>
                                    <td className='points'>{club.points}</td>
                                    <td className='currentForm'>{club.form}</td>
                                </tr>
                            );
                        })
                        : <h2>Unfortunately, data cannot be loaded at this point. Please, try again later.</h2>
                    }
                </tbody>
            </table>
        </section>
    );
};

export default Modal;
