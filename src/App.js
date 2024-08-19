import MenuContainer from './Components/MenuContainer';
import './App.css';
import { Add, Chat, FavoriteRounded, Notifications, Person, QuestionMark } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import Pin from './Components/Pin';
import Data from './Components/Data';
import SearchBar from './Components/SearchBar';

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const allIcon = document.querySelectorAll('.iconContainer');

    function setMenuActive(){
      allIcon.forEach((n)=> n.classList.remove("active"));
      this.classList.add("active");
    }
    
    allIcon.forEach((n) => n.addEventListener("click", setMenuActive));

  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  }

  const filteredData = Data.filter((data) => 
    data.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

      

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
        <SearchBar
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
        />
        
        <div className="mainContainer">
          {
            filteredData && filteredData.map((data) => 
              <Pin 
                key={data.id} 
                pinSize={data.size}
                imgSrc={data.imgSrc}
                name={data.name}
                link={data.link}
                />
          )}
        </div>
      </main>
    </div>
  );
}
export default App;

