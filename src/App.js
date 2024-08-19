import MenuContainer from './Components/MenuContainer';
import './App.css';
import { Add, Chat, FavoriteRounded, Notifications, Person, QuestionMark } from '@mui/icons-material';
import { useEffect } from 'react';
import Pin from './Components/Pin';

function App() {
  useEffect(() => {
    const allIcon = document.querySelectorAll('.iconContainer');

    function setMenuActive(){
      allIcon.forEach((n)=> n.classList.remove("active"));
      this.classList.add("active");
    }
    
    allIcon.forEach((n) => n.addEventListener("click", setMenuActive));

  }, []);
      

  return (
    <div className="App">
      <div className='menuContainer'>
        <img src="https://firebasestorage.googleapis.com/v0/b/printerest-clone-773aa.appspot.com/o/pintrestlogo.png?alt=media&token=ad9c09a0-d8cf-4cb0-ab7f-56081414c78b" 
        className="logo" 
        alt="logo" 
        />

        <div className="subMenu"> 
          <div>
            <MenuContainer icon={<Person/>}/>
            <MenuContainer icon={<Notifications/>}/>
            <MenuContainer icon={<Chat/>}/>
          </div>

          <div>
            <MenuContainer icon={<FavoriteRounded/>}/>
          </div>

          <div>
            <MenuContainer icon={<QuestionMark/>}/>
            <MenuContainer icon={<Add/>}/>
          </div>

        </div>
      </div>
      
      <main>
        <div className="searchBox">
          <input type="text" placeholder="Search.." />
          <div className="search">
            <img src= "https://firebasestorage.googleapis.com/v0/b/printerest-clone-773aa.appspot.com/o/right-arrow-symbol%20(1).png?alt=media&token=b2c60ed8-2462-48df-b5d7-610cde874f91"
            alt="search" />
          </div>
        </div>
        <div className="mainContainer">
          <Pin pinSize={"small"}/>
          <Pin pinSize={"medium"}/>
          <Pin pinSize={"large"}/>
          <Pin pinSize={"small"}/>
          <Pin pinSize={"medium"}/>
          <Pin pinSize={"large"}/>
          <Pin pinSize={"small"}/>
          <Pin pinSize={"medium"}/>
          <Pin pinSize={"large"}/>
          <Pin pinSize={"small"}/>
          <Pin pinSize={"medium"}/>
          <Pin pinSize={"large"}/>
          <Pin pinSize={"small"}/>
          <Pin pinSize={"medium"}/>
          <Pin pinSize={"large"}/>
          <Pin pinSize={"small"}/>
          <Pin pinSize={"medium"}/>
          <Pin pinSize={"large"}/>
          <Pin pinSize={"small"}/>
          <Pin pinSize={"medium"}/>
          <Pin pinSize={"large"}/>
          
        </div>
      </main>
    </div>
  );
}
export default App;

