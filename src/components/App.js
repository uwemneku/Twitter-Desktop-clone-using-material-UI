import React, { useEffect } from 'react';
import Preloader from './components/Preloader';
import Layout from './components/Layout'
import { Hidden } from '@material-ui/core';



export default function App (){
  const [loading, setLoading] = React.useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 3000);
   
  }, [])
  return(
          <div>
            {loading?<Layout />:<Preloader />}
          </div>
    )
}