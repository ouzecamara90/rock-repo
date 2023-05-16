import axios from 'axios';
import {useEffect} from 'react';
import {useState} from 'react';
import listOfUsers from 'react';


const [listOfUsers, setListOfUsers] = useState([]);



useEffect(() => {
    axios.get('https://jasonplaceholder.typicode.com/users').then(response =>{
        setListOfUsers(response.data);
    }).catch(error => {
        console.error('Error fetching user data:',error);
    });
},[]);



return (
    <div>
      <h1>Liste des utilisateurs :</h1>
      <ul>
        {listOfUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
  