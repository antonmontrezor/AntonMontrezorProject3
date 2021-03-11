import './App.scss';
import axios from 'axios';
import Qs from 'qs';
import { useState } from 'react';
import LeaguesSection from './LeaguesSection.js';
import Modal from './Modal.js';

function App() {

    //initializing leagueData state to hold API data when it is retrieved 
    const [leagueData, setLeagueData] = useState([]);
    //initializing modal state for showing/hiding a modal window
    const [modal, setModal] = useState(false);

    //handleClick function will make an API call based on passed uniqueId
    const handleClick = uniqueId => {
        axios({
            method: 'GET',
            url: 'http://proxy.hackeryou.com',
            dataResponse: 'JSON',
            paramsSerializer: function (params) {
                return Qs.stringify(params);
            },
            params: {
                reqUrl: `https://api.football-data.org/v2/competitions/${uniqueId}/standings`,
                params: {
                    standingType: 'TOTAL',
                    plan: 'TIER_ONE',
                },
                proxyHeaders: {
                    'X-Auth-Token': '09722ed4b29e4ecca137025eb07bbb46',
                },
                xmlToJSON: false,
            },
        })
		.then(response => {
			response = response.data.standings[0].table;
            //updating leagueData with retrieved API data so it can be passed to Modal component
			setLeagueData(response);
            //updating modal state so a modal window can be shown 
            setModal(!modal);
        })
		.catch(errors => alert('Unfortunately, data cannot be loaded at the moment! Please, try to disable your ad blocker and refresh the page!')
		);
    };

    return (
        <>
            <header>
                <h1>Football | Soccer Statistics App</h1>
            </header>
            <main>
                <div className='wrapper'>
                    {/* passing handleClick so it can be called within LeaguesSection component */}
                    <LeaguesSection handleClick={handleClick}/>
                </div>
                {/* passing modal and its updater function to Modal component so they can be used to show/hide a modal window -- also passing leagueData so it can be displayed on the page */}
                <Modal modal={modal} setModal={setModal} leagueData={leagueData}/>
            </main>
            <footer>
                <p>Created at <a href='https://junocollege.com/'>Juno College</a> by Anton Montrezor</p>
            </footer>
        </>
    );
}

export default App;
