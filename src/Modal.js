const Modal = ({leagueData, modal, setModal}) => {
    return (
        <div className={`modal ${modal ? "visible" : "hidden"}`}>
            <h2>Standings:</h2>
            <button className="closeModal" onClick={() => setModal(!modal)}></button>
            <ol className="league">
                {
                    leagueData.map(club => {
                        return (
                            <li key={club.position}>{club.team.name}</li>
                        )
                    })
                }
            </ol>
        </div>
    )
}

export default Modal;