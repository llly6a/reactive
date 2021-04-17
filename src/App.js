import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { requestUsers } from './redux/users-reducer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import UsersTable from './components/Users/UsersTable';

function App() {

  const dispatch = useDispatch();

  //request users on first load
  useEffect(() => {
    dispatch(requestUsers());
  },[dispatch]);

  return (
      <div className="App">
        <ul className="bg-bubbles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <UsersTable />
      </div>
  );
}

export default App;
