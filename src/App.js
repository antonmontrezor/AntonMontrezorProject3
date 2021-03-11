import './App.scss';
import axios from 'axios';
import Qs from 'qs';
import { useState } from 'react';
import LeaguesSection from './LeaguesSection.js';
import Modal from './Modal.js';

function App() {
    const [leagueData, setLeagueData] = useState([]);
    const [modal, setModal] = useState(false);

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
			setLeagueData(response);
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
                    <LeaguesSection handleClick={handleClick}/>
                </div>
                <Modal modal={modal} setModal={setModal} leagueData={leagueData}/>
            </main>
            <footer>
                <p>Created at <a href='https://junocollege.com/'>Juno College</a> by Anton</p>
            </footer>
        </>
    );
}

export default App;
