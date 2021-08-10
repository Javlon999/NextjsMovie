import React from 'react'
import axios from 'axios';
import Allmovies from '../components/Allmovies';
import {config,headers} from './api/config' ;
import Style from '../styles/Home.module.css';

    const HomePage = ({ data,loading}) => {
      console.log('data',data)
      return (
     
        <div className={Style.homePage}>
          <Allmovies data={data} loading={loading} />
  
        </div>

      )
    
    }

    

    export const getServerSideProps = async ({ query }) => {
      const page = query.page || 1
      let data = null
      let loading=false
      try {
       
        const res = await axios.get(`${config.API_ROOT}/movie/now_playing?api_key=${config.API_KEY}&language=en-US&page=${page}`,{headers})
       
        data = await res.data;
        console.log('data',data)
        loading=data ? true:false
     
      } catch (err) {
        data = { error: { message: err.message } }
      }
      // Pass data to the page via props
      return { props: { data,loading} }
    }

 
    export default HomePage