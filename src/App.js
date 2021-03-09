import axios from 'axios';
import Qs from 'qs';
import {useState, useEffect} from 'react';
import Main from './Main.js';
import Modal from './Modal.js';
import './App.scss';

function App() {

    const leaguesIds = {
      bundesliga: 2002,
      premierLeague: 2021,
      serieA: 2019,
      laLiga: 2014,
      league1: 2015
    }

    const [leagueData, setLeagueData] = useState([]);
    const [modal, setModal] = useState(false);

    const handleClick = uniqueId => {

      axios({
        method: 'GET',
        url: 'http://proxy.hackeryou.com',
        dataResponse: 'JSON',
        paramsSerializer: function (params) {
          return Qs.stringify(params)
        },
        params: {
          reqUrl: `https://api.football-data.org/v2/competitions/${uniqueId}/standings`,
          params: {
            standingType: 'TOTAL',
            plan: 'TIER_ONE'
          },
          proxyHeaders: {
            'X-Auth-Token': '09722ed4b29e4ecca137025eb07bbb46'
          },
          xmlToJSON: false
        }
      })
      .then(response => {
        response = response.data.standings[0].table;
        setLeagueData(response)
      })

      setModal(!modal)
    }

  return (
    <>
      <h1>Football Statistics App</h1>
      <Main leaguesIds={leaguesIds} handleClick={handleClick}/>
      <Modal modal={modal} setModal={setModal} leagueData={leagueData}/>
   </>
  );
}

export default App;
