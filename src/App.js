import axios from 'axios';
import Qs from 'qs';
import {useState, useEffect} from 'react';
import Main from './Main.js';
import Modal from './Modal.js';
import './App.scss';

function App() {
    const [leagueId, setLeagueId] = useState();
    const leaguesIds = [2002, 2021, 2019, 2014, 2015];
    const [footballData, setFootballData] = useState([]);
    const [leagueData, setLeagueData] = useState([]);
    const [modal, setModal] = useState(false);


    useEffect(() => {
      // const token = '09722ed4b29e4ecca137025eb07bbb46';

      axios({
        method: 'GET',
        url: 'http://proxy.hackeryou.com',
        dataResponse: 'JSON',
        paramsSerializer: function (params) {
          return Qs.stringify(params)
        },
        params: {
          reqUrl: `https://api.football-data.org/v2/competitions/`,
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
        response = response.data.competitions;
        setFootballData(response)
      })
    }, [])

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
        console.log(response)
        response = response.data.standings[0].table;
        setLeagueData(response)
      })

      setModal(!modal)

      setLeagueId(uniqueId); 
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
