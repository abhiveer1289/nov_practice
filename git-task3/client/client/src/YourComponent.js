import React from 'react';
import { useState } from 'react';
import { Link } from 'react-scroll';
import MyDataTable from './Datatable';
import SearchBar from './SearchBar';
import StatisticalPieChart from './StatisticalPieChart';
import TableComponent from './TableComponent';
import MyForm from './Myform';
import './elearn2.css';
import HamburgerMenu from './HamburgerMenu';
const CardComponent= () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleSearchButtonClick = () => {
    setShowSearchBar(!showSearchBar);
  };
  const handleSearch = (searchTerm) => {
    // Implement your search logic here
    console.log('Searching for:', searchTerm);
    // You can update the state, fetch data, etc.
    const datas = document.querySelectorAll(".data")
    if(searchTerm!==""){
    for (let i of datas){
      if(i.textContent.includes(searchTerm)){
        let temp=""
        for(let j of i.textContent.split(" ")){
          if(j.includes(searchTerm)){
            let wordstartindex = j.indexOf(searchTerm)
            let wordLastIndex = wordstartindex+searchTerm.length
            console.log(j,j.slice(wordstartindex,wordLastIndex))
            temp+= `${j.slice(0,wordstartindex)}<span>${j.slice(wordstartindex,wordLastIndex)}</span>${j.slice(wordLastIndex)}`
          }
          else{
            temp += `${j} `
          }
          console.log(temp)
        }
        i.innerHTML = temp
        
      }
    }
  }
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
        <nav className="searchnavbar">
         <button onClick={handleSearchButtonClick}>Open Search</button>
         {showSearchBar && <SearchBar onSearch={handleSearch} />}
        </nav>
        {/* <div className="nav-links">
        <Link className='nav-links' to="StatisticalPieChart" smooth={true} duration={500}>
          StatisticalPieChart
        </Link>
        <Link to="TableComponent" smooth={true} duration={500}>
          TableComponent
        </Link>
        <Link to="MyForm" smooth={true} duration={500}>
          MyForm
        </Link>
        <Link to="CardComponent" smooth={true} duration={500}>
          CardComponent
        </Link>
      </div> */}
      {/* Hamburger menu */}
      <div className="hamburger-icon" onClick={toggleMenu}>
        &#9776;
      </div>

      <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <div className="gridItems">
            <div className="card" >
              <img src="https://media.istockphoto.com/id/911590226/vector/movie-time-vector-illustration-cinema-poster-concept-on-red-round-background-composition-with.jpg?s=2048x2048&w=is&k=20&c=F9qz8jEdNbZJ27nesDGqihT8MysRhZZjzv7IEPWJ0GY="aria-hidden="true"></img>
               <h3 className="data">MOVIES DATA</h3>
               <p className="data">INFO:This data represents a comprehensive collection of movies information, offering key statistical insights into various attributes. From mean and mode values, shedding light on aspects like episodes, popularity, and  views etc</p>
                </div>
               <div className="card" >
              <img src="https://media.istockphoto.com/id/1355687112/photo/various-sport-equipment-gear.jpg?s=2048x2048&w=is&k=20&c=QtqmXVT7d_n31sTuC8H6d_NKF75VsxZk2ATGLT7qclo="aria-hidden="true"></img>
               <h3 className="data">SPORTS DATA</h3>
               <p className="data">INFO:This data represents a comprehensive collection of Spoets information, offering key statistical insights into various attributes. From mean and mode values, shedding light on aspects like cricket, football,  and kabbadi etc</p>
                </div>
               <div className="card" >
                 <img src="https://media.istockphoto.com/id/1171703171/photo/illustration-of-immune-system-defence-concept.jpg?s=2048x2048&w=is&k=20&c=c9T0r8lJnVa6d7ZQb2v5L2yeROoShlZo4O9Uvprq7sQ="aria-hidden="true"></img>
                 <h3 className="data">DISEASE DATA</h3>
                 <p className="data">INFO:This data represents a comprehensive collection of Disease information, offering key statistical insights into various attributes. From mean and mode values, shedding light on aspects like effected, alive, and deaths etc </p>
                </div>
               <div className="card" >
                 <img src="https://platerecognizer.com/wp-content/uploads/2020/08/Plate-Recognizer-ALPR-Vehicle-Types.jpg"aria-hidden="true"></img>
                 <h3 className="data">VEHICLES DATA</h3>
                 <p className="data">INFO:This data represents a comprehensive collection of vehiclesinformation, offering key statistical insights into various attributes. From mean and mode values, shedding light on aspects like cats, bikes, rank, and lorries etc</p>
                </div>
               </div>
           ) 
      <StatisticalPieChart/>
      <MyDataTable/>
      <MyForm/>
    </div>
  );
};
export default CardComponent;


