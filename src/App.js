
import { useEffect } from 'react';
import './App.css';
import BoardList from './components/boardsList/BoardsList';
import Header from './components/header/Header';
import PinsList from './components/pinsList/PinsList';
import UserCard from './components/usercard/UserCard';
import { useState } from 'react';

function App() {
  const idUser = 0;
  const url = 'http://localhost:5000/users';
                      const [usuarios, setUsuarios] = useState(undefined);
                      //const [idDelUser, setIdDelUser] = useState(undefined);
                      useEffect(() => {  
                         fetch(url)
                         .then ((response) => {
                             if (response.ok) {
                                 return response.json();
                             }else{
                                 throw Error(response.statusText);
                             }
                         })
                         .then((data) => {
                             setUsuarios(data);
                            //  setIdDelUser(data[0].id);
                            //  console.log(idDelUser);
                            
                             
                             
                             
                         })
                         .catch((error)  =>{
                             console.error(error)
                         });
                      }, []);

  return (
    <div className="App">
      <Header />
      {usuarios && <UserCard name = {usuarios[idUser].firstName + " " +usuarios[idUser].lastName}  userName = {usuarios[idUser].username} folow = {usuarios[idUser].following.length} /> }
      <BoardList  />
      <PinsList  />
   
    </div>
  );
}
export default App;
