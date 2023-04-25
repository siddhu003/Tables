import React from 'react';
import Table from './Components/Table';
import { useEffect } from 'react' 
import { useDispatch} from 'react-redux'
import { fetchAllUsers } from './actions/tables'

function App() {
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [dispatch])


  return (
    <div>
          <Table/>
      </div>
  );
}

export default App;
