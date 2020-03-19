import React        from 'react';
import './App.css';
import Counter      from './components/Counter';
import UsersList    from './components/UsersList';
import OddUsersList from './components/OddUsersList';

function App () {
  return (
    <>
      <Counter/>
      <UsersList/>
      <OddUsersList/>
    </>
  );
}

export default App;
