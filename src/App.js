
import './App.css';
import BoardList from './components/boardsList/BoardsList';
import DropDown from './components/dropDown/DropDown';
import Header from './components/header/Header';
import PinsList from './components/pinsList/PinsList';
import UserCard from './components/usercard/UserCard';

function App() {

  const users = [
    {
      "id": 1,
      "firstName": "Cass",
      "lastName": "Loughrey",
      "email": "cloughrey0@mozilla.org",
      "avatar": "https://robohash.org/consecteturnobisdolores.bmp?size=50x50&set=set1",
      "password": "81DvRN",
      "username": "@johnDoe12",
      "following": [2, 3]
    },
    {
      "id": 2,
      "firstName": "Morley",
      "lastName": "Pales",
      "email": "mpales1@auda.org.au",
      "password": "LJbrpySNi7",
      "username": "johnDoe",
      "following": []
    },
    {
      "id": 3,
      "firstName": "Timmi",
      "lastName": "Rothert",
      "email": "trothert2@marketwatch.com",
      "password": "uegwgfc0Tv8",
      "username": "johnDoe",
      "following": []
    },
    {
      "id": 4,
      "firstName": "Kele",
      "lastName": "Marling",
      "email": "kmarling3@360.cn",
      "avatar": "https://robohash.org/consequaturquieveniet.png?size=50x50&set=set1",
      "password": "x1K222B5um",
      "username": "johnDoe",
      "following": []
    },
    {
      "id": 5,
      "firstName": "Candis",
      "lastName": "Strangward",
      "email": "cstrangward4@nbcnews.com",
      "password": "WbWMpcHURU",
      "username": "johnDoe",
      "following": []
    },
    {
      "id": 6,
      "firstName": "Lind",
      "lastName": "McGrale",
      "email": "lmcgrale5@com.com",
      "password": "3WUGGNVi",
      "username": "johnDoe",
      "following": []
    },
    {
      "id": 7,
      "firstName": "Lalo",
      "lastName": "Scorah",
      "email": "lscorah6@howstuffworks.com",
      "password": "ST7NLy",
      "username": "johnDoe",
      "following": []
    },
    {
      "id": 8,
      "firstName": "Vidovik",
      "lastName": "Dallinder",
      "email": "vdallinder7@tamu.edu",
      "avatar": "https://robohash.org/quihicsaepe.jpg?size=50x50&set=set1",
      "password": "G8ergF",
      "username": "johnDoe",
      "following": []
    },
    {
      "id": 9,
      "firstName": "Luther",
      "lastName": "Huguet",
      "email": "lhuguet8@mit.edu",
      "password": "xzDUzoj",
      "username": "johnDoe",
      "following": []
    },
    {
      "id": 10,
      "firstName": "Minnnie",
      "lastName": "Danko",
      "email": "mdanko9@cbc.ca",
      "avatar": "https://robohash.org/nesciuntestrem.png?size=50x50&set=set1",
      "password": "OEuEscs",
      "username": "johnDoe",
      "following": []
    },
    {
      "id": 11,
      "firstName": "Rycca",
      "lastName": "Jobbing",
      "email": "rjobbinga@theatlantic.com",
      "password": "a41YUJ4e",
      "username": "johnDoe",
      "following": []
    },
    {
      "id": 12,
      "firstName": "Jewel",
      "lastName": "Frank",
      "email": "jfrankb@pcworld.com",
      "password": "SAIFl4DVmQU2",
      "username": "johnDoe",
      "following": []
    },
    {
      "id": 13,
      "firstName": "Harlin",
      "lastName": "Trahmel",
      "email": "htrahmelc@vk.com",
      "avatar": "https://robohash.org/hicsitet.bmp?size=50x50&set=set1",
      "password": "O3j0GpCT7",
      "username": "johnDoe",
      "following": []
    },
    {
      "id": 14,
      "firstName": "Weylin",
      "lastName": "Panton",
      "email": "wpantond@sciencedirect.com",
      "password": "PER0HD",
      "username": "johnDoe",
      "following": []
    },
    {
      "id": 15,
      "firstName": "Catherina",
      "lastName": "Merry",
      "email": "cmerrye@nature.com",
      "password": "DRI0n6",
      "username": "johnDoe",
      "following": []
    },
    {
      "id": 16,
      "firstName": "Margi",
      "lastName": "Sanchez",
      "email": "msanchezf@vkontakte.ru",
      "avatar": "https://robohash.org/eligendieumeaque.jpg?size=50x50&set=set1",
      "password": "QkoO2kiYa",
      "username": "johnDoe",
      "following": []
    },
    {
      "id": 17,
      "firstName": "Emmery",
      "lastName": "Chidlow",
      "email": "echidlowg@noaa.gov",
      "avatar": "https://robohash.org/eumevenietnobis.bmp?size=50x50&set=set1",
      "password": "6URz2mr",
      "username": "johnDoe",
      "following": []
    },
    {
      "id": 18,
      "firstName": "Marty",
      "lastName": "Delve",
      "email": "mdelveh@hp.com",
      "password": "hxQqbiqa",
      "username": "johnDoe",
      "following": []
    },
    {
      "id": 19,
      "firstName": "Sherie",
      "lastName": "Warland",
      "email": "swarlandi@histats.com",
      "password": "eJcf9NrKe",
      "username": "johnDoe",
      "following": []
    },
    {
      "id": 20,
      "firstName": "Staci",
      "lastName": "Achromov",
      "email": "sachromovj@nasa.gov",
      "password": "5AgZXNFKFcK",
      "username": "johnDoe",
      "following": []
    }
  ]

  const boards = [
    { "name": "All pins", 
      "imgUrl": "" , 
      "urlLink": "", 
      "numberOfpins": 512
    },
    { 
      "name": "Board 2",
      "imgUrl": "" , 
      "urlLink": "", 
      "numberOfpins": 22
    },
    { 
      "name": "Board of plants", 
      "imgUrl": "" , 
      "urlLink": "", 
      "numberOfpins": 12
    },
    { 
      "name": "Board of foods", 
      "imgUrl": "" , 
      "urlLink": "", 
      "numberOfpins": 51
    },
    { 
      "name": "Amazing Board", 
      "imgUrl": "" , 
      "urlLink": "", 
      "numberOfpins": 0
    },
    { 
      "name": "Quick savel", 
      "imgUrl": "" , 
      "urlLink": "", 
      "numberOfpins": 1
    }
  ];
  const pins = [
    {
    "name": "Receta familiar" ,
    "user": "" , 
    "imgUrl": "https://riasdegalicia.com/wp-content/uploads/2021/05/image-2.png", 
    "numberOfLikes": 512,
    "description": "",
    "urlLink": ""
    },
    {
    "name": "Puerta inglesa" ,
    "user": "" , 
    "imgUrl": "https://riasdegalicia.com/wp-content/uploads/2021/05/image-3.png", 
    "numberOfLikes": 512,
    "description": "",
    "urlLink": ""
    },
    {
    "name": "" ,
    "user": "" , 
    "imgUrl": "https://riasdegalicia.com/wp-content/uploads/2021/05/image-4.png", 
    "numberOfLikes": 512,
    "description": "",
    "urlLink": ""
    },
    {
    "name": "Azul" ,
    "user": "" , 
    "imgUrl": "https://riasdegalicia.com/wp-content/uploads/2021/05/image-5.png", 
    "numberOfLikes": 512,
    "description": "",
    "urlLink": ""
    },
    {
    "name": "" ,
    "user": "" , 
    "imgUrl": "https://riasdegalicia.com/wp-content/uploads/2021/05/image-6.png", 
    "numberOfLikes": 512,
    "description": "",
    "urlLink": ""
    }
    
  ];
  const user=users[0];
  console.log(user.following.length)
  return (
    <div className="App">
      <Header />
      <DropDown />
      <UserCard name = {user.firstName + user.lastName}  userName = {user.username} folow = {user.following.length} />
      <BoardList boards={boards}/>
      <PinsList pins = {pins}/>
      
    </div>
  );
}

export default App;
