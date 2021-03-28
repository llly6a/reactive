import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import UsersTable from './components/Users/UsersTable';
import { requestUsers } from './redux/users-reducer';

function App() {

  const dispatch = useDispatch();

  //request users on first load
  useEffect(() => {
    dispatch(requestUsers());
  },[dispatch]);

  return (

      <div className="App">
          Пользователи
          <UsersTable/>
      </div>

  );
}

export default App;
