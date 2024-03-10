import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { hamburgerMenu } from '../components/hamburgerMenu';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from 'react-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import NavbarMenu from '../components/navbarMenu';
import './HomePage.css';
import { usePostContext } from '../hooks/usePostContext';


const HomeIndex = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const [makeDropdown, setMakeDropdown] = useState(false);
  const [modelDropdown, setModelDropdown] = useState(false);
  const [yearsDropdown, setYearsDropdown] = useState(false);
  const [priceDropdown, setPriceDropdown] = useState(false);
  const [mileageDropdown, setMileageDropdown] = useState(false);

  const toggleDropdown = (dropdownType) => {
    switch (dropdownType) {
      case 'make':
        setMakeDropdown(!makeDropdown);
        break;
      case 'model':
        setModelDropdown(!modelDropdown);
        break;
      case 'years':
        setYearsDropdown(!yearsDropdown);
        break;
      case 'price':
        setPriceDropdown(!priceDropdown);
        break;
      case 'mileage':
        setMileageDropdown(!mileageDropdown);
        break;
      default:
        break;
    }
  };
  const [checkedMakes, setCheckedMakes] = useState([]);
  const [checkedModels, setCheckedModels] = useState([]);
  const [checkedYears, setCheckedYears] = useState([]);
  const [checkedPrices, setCheckedPrices] = useState([]);
  const [checkedMileages, setCheckedMileages] = useState([]);

  // Car model function
  const [cars, setCars] = useState([
    { make: 'Toyota', model: 'Camry' },
    { make: 'Toyota', model: 'Corolla' },
    { make: 'Toyota', model: 'Prius' },
    { make: 'Toyota', model: 'RAV4' },

    { make: 'Honda', model: 'Accord' },
    { make: 'Honda', model: 'Civic' },
    { make: 'Honda', model: 'CR-V' },
    { make: 'Honda', model: 'Odyssey' },

    { make: 'BMW', model: 'X1' },
    { make: 'BMW', model: 'X3' },
    { make: 'BMW', model: 'X5' },
    { make: 'BMW', model: 'M3' },

    { make: 'Tesla', model: 'Model 3' },
    { make: 'Tesla', model: 'Model Y' },
    { make: 'Tesla', model: 'Model X' },
    { make: 'Tesla', model: 'Model S' },

    { make: 'Chevrolet', model: 'Model 3' },
    { make: 'Chevrolet', model: 'Model Y' },
    { make: 'Chevrolet', model: 'Model X' },
    { make: 'Chevrolet', model: 'Model S' },

    { make: 'Ford', model: 'Model 3' },
    { make: 'Ford', model: 'Model Y' },
    { make: 'Ford', model: 'Model X' },
    { make: 'Ford', model: 'Model S' },
  ]);
  const [filteredResults, setFilteredResults] = useState({});
  const [filteredModelResults, setFilteredModelResults] = useState({});
  const [showModelOptions, setShowModelOptions] = useState(false);

  const handleCheckboxClick = (value, isMake) => {
    if (isMake) {
      setCheckedMakes((prevCheckedMakes) => {
        if (prevCheckedMakes.includes(value)) {
          return prevCheckedMakes.filter((make) => make !== value);
        } else {
          return [...prevCheckedMakes, value];
        }
      });
    } else {
      setCheckedModels((prevCheckedModels) => {
        if (prevCheckedModels.includes(value)) {
          return prevCheckedModels.filter((model) => model !== value);
        } else {
          return [...prevCheckedModels, value];
        }
      });
    }
  };

  const handleSearchClick = () => {
    const newFilteredResults = {};

    checkedMakes.forEach((selectedMake) => {
      // Filter the cars based on the selected make
      const result = cars.filter((car) => car.make === selectedMake);
      newFilteredResults[selectedMake] = result;
    });

    setFilteredResults(newFilteredResults);
    setShowModelOptions(true); // Show model options after search

    console.log('Search button clicked:', newFilteredResults);
  };

  const handleClearClick = () => {
    setCheckedMakes([]);
    setFilteredResults({});
    setShowModelOptions(false); // Hide model options on clear
  };

  const handleModelSearchClick = () => {
    const newFilteredModelResults = {};

    checkedModels.forEach((selectedModel) => {
      // Filter the cars based on the selected model
      const result = cars.filter((car) => car.model === selectedModel);
      newFilteredModelResults[selectedModel] = result;
    });

    setFilteredModelResults(newFilteredModelResults);

    console.log('Model Search button clicked:', newFilteredModelResults);
  };

  const handleModelClearClick = () => {
    setCheckedModels([]);
    setFilteredModelResults({});
  };

  const modelOptions = ['Toyota', 'Honda', 'BMW', 'Tesla', 'Chevrolet', 'Ford'];
  //  const modelOptions = ['Camry', 'Corolla', 'Accord', 'Civic', 'X5', 'X3'];

  // Car make function
  const [makelOptions, setMakeOptions] = useState([]);
  const [checkedMake, setCheckedMake] = useState([]);
  const [filteredMakeResults, setFilteredMakeResults] = useState({});

  const handleMakeCheckboxClick = (value) => {
    setCheckedMake((prevCheckedMake) => {
      if (prevCheckedMake.includes(value)) {
        return prevCheckedMake.filter((make) => make !== value);
      } else {
        return [...prevCheckedMake, value];
      }
    });
  };
  
  const handleMakeSearchClick = () => {
    const newFilteredMakeResults = {};
  
    checkedMakes.forEach((selectedMake) => {
      // Filter the cars based on the selected make
      const result = cars.filter((car) => car.make === selectedMake);
      newFilteredMakeResults[selectedMake] = result;
    });
  
    setFilteredMakeResults(newFilteredMakeResults);
  
    console.log('Make Search button clicked:', newFilteredMakeResults);
  };
  
  const handleMakeClearClick = () => {
    setCheckedMake([]);
    setFilteredMakeResults({});
  };
  
  const makeOptions = ['Toyota', 'Honda', 'BMW', 'Tesla', 'Chevrolet', 'Ford'];


  // Years function
  const handleYearCheckboxClick = (year) => {
    setCheckedYears((prevCheckedYears) => {
      if (prevCheckedYears.includes(year)) {
        return prevCheckedYears.filter((selectedYear) => selectedYear !== year);
      } else {
        return [...prevCheckedYears, year];
      }
    });
  };
  
  const handleYearClearClick = () => {
    setCheckedYears([]);
  };

  // Price function
  const handlePriceCheckboxClick = (price) => {
    setCheckedPrices((prevCheckedPrices) => {
      if (prevCheckedPrices.includes(price)) {
        return prevCheckedPrices.filter((selectedPrice) => selectedPrice !== price);
      } else {
        return [...prevCheckedPrices, price];
      }
    });
  };

  const handlePricesClearClick = () => {
    setCheckedPrices([]);
  };

  // Mileage function
  const handleMileageCheckboxClick = (mileage) => {
    setCheckedMileages((prevCheckedMileages) => {
      if (prevCheckedMileages.includes(mileage)) {
        return prevCheckedMileages.filter((selectedMileage) => selectedMileage !== mileage);
      } else {
        return [...prevCheckedMileages, mileage];
      }
    });
  };

  const handleMileageClearClick = () => {
    setCheckedMileages([]);
  };


  // Function to handle keyup event
  const myFunction = () => {
    const searchInput = document.getElementById('mySearch').value.toLowerCase();
    const items = document.querySelectorAll('.dropdown-content .model-label');

    items.forEach((item) => {
      const text = item.textContent.toLowerCase();

      if (text.includes(searchInput)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  };



    const [viewingPost, setViewingPost] = useState(false);
    const [currentPost, setCurrentPost] = useState(-1);
    const [currentPostId, setCurrentPostId] = useState(-1);

    const handlePostBoxClick = (post, id) =>{

      if(viewingPost == false){     //This was for a pop-up feature. Still can be useful later
        //setCurrentPost(post);
        //setViewingPost(true);
      }
      else if (viewingPost == true){
        //setCurrentPost(-1);
        //setViewingPost(false);
      }
      
      //This is for changing the webpage to a unique one and passing the post.id through url
      setCurrentPostId(id);
      var href = "/CarInfo/" + id;
      window.location=href;
    }   
  
    //Pulling and Showing Posts from Database Section
  
    const {posts, dispatch} = usePostContext()
  
    //Might be efficient if this only occured on refresh instead of always
    //Need to limit how many get pulled with it getting more when it reaches bottom of screen or by clicking next page
    useEffect(() => {
      const fetchPosts = async () => {
        const response = await fetch('/api/postRoutes')
        const json = await response.json()
  
        if(response.ok){
          console.log('response Ok')
          dispatch({type: 'SET_POSTS', payload: json})
        }
      }
      
      fetchPosts()
    }, [])
    //DO NOT REMOVE THE BRACKETS, empty dependancy array as a 2nd arg runs useEffect hook only once when component renders
    //Will run hook again when page refreshes
    //Could be useful for real-time refreshes, if that was desirable

    var postCounter = 0;
    const filter = (post) => {  
      if(postCounter > 19){   //Limit posts to 20 (4x5) so it fits on screen)
        return false;
      }
      postCounter++;
      console.log("checkedModels = " + filteredModelResults.length);
      console.log("checkedMake = " + checkedMake.length);

      //Not Filtering so show all results                                       //This is just the name for models
      if(checkedMake.length == 0 && checkedMileages == 0 && checkedYears == 0 && checkedMakes == 0 && checkedPrices == 0){
        return true;
      }

      //Assume at this point we are filtering
      var returnVal = false;
      var passAllFilters = true;
      if(checkedMake.length != 0){
        if(checkedMake.includes(post.make)){
          //returnVal = true;
        } else {
          //returnVal = false;
          passAllFilters = false;
        }
      }
      if(checkedMileages.length != 0){
        if(checkedMileages.includes(getMileageString(post.mileage))){
          //returnVal = true;
        } else {
          //returnVal = false;
          passAllFilters = false;
        }
      }
      if(checkedYears.length != 0){
        if(checkedYears.includes(getYearString(post.year))){
          //returnVal = true;
        } else {
          //returnVal = false;
          passAllFilters = false;
        }
      }
      if(checkedMakes.length != 0){ //Name for models array
        if(checkedMakes.includes(post.model)){
          //returnVal = true;
        } else {
          //returnVal = false;
          passAllFilters = false;
        }
      }
      if(checkedPrices.length != 0){
        if(checkedPrices.includes(getPriceString(post.price))){
          //returnVal = true;
        } else {
          //returnVal = false;
          passAllFilters = false;
        }
      }

      return passAllFilters;
    }

    const mileageStrings = ['0 - 25,000 miles', '25,000 - 75,000 miles', 
    '75,000 - 125,000 miles', '125,000 miles & up'];
    const priceStrings = ['$0,000 - $10,000', '$10,000 - $25,000', '$25,000 - $50,000', '$50,000 & up'];
    const yearStrings = ['2020-Today', '2010-2020', '2000-2010', '1990-2000', '1980-1990', '< 1980'];

    const getMileageString = (mileage) =>{
      if(mileage > 125000){
        return mileageStrings[3];
      } else if (mileage > 75000){
        return mileageStrings[2];
      } else if (mileage > 25000){
        return mileageStrings[1];
      } else {
        return mileageStrings[0];
      }
    }

    const getYearString = (year) =>{
      if(year > 2020){
        return yearStrings[0];
      } else if (year > 2010){
        return yearStrings[1];
      } else if (year > 2000){
        return yearStrings[2];
      } else if (year > 1990){
        return yearStrings[3];
      } else if (year > 1980){
        return yearStrings[4];
      } else {
        return yearStrings[5];
      }
    }

    const getPriceString = (price) =>{
      if(price > 50000){
        return priceStrings[3];
      } else if (price > 25000){
        return priceStrings[2];
      } else if (price > 10000){
        return priceStrings[1];
      } else {
        return priceStrings[0];
      }
    }
  

  return (
    <section>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to="#" className='hamburger-bars'>
            <FaBars onClick={showSidebar} />
          </Link>

          <div className="carmony-logo">
            <img src="CARMONY_ICON2.png" alt="" />
          </div>

          <NavbarMenu />
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className='hamburger-bars'>
                <AiOutlineClose />
              </Link>
            </li>
            {hamburgerMenu.map((item, index) => {
                return (
                    <li key={index} className={item.cName}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                );
            })}
          </ul>
        </nav>
      </IconContext.Provider>

{/*Working on filter part(filter out cars with the dropdown options)--Janeeya Chanta*/}
      <div className="filter-container">
        <div className="filter-box">
          <div className="side-bar">
            <div className="filter-search">
              <div className="filter-header">
                <h1>Filter by</h1>
                <a href="#">
                  <h3>clear filter</h3>
                </a>
              </div>
            </div>

            <input
              type="text"
              id="mySearch"
              onKeyUp={myFunction}
              placeholder="Search by Make...."
              title="Type in a category"
            />
           
            <div className="myMenu">
              <div className="customer-choices">
                <div className="choices">
                  <Link to="#"><h3>All</h3></Link>
                  <Link to="#"><h3>Dealers</h3></Link>
                  <Link to="#"><h3>Owners</h3></Link>
                </div>
              </div>

              <div className="dropdown-section">
                <li>
                  <div className="arrow-container">
                    <h3 onClick={() => toggleDropdown('model')}>
                      <p>Model</p>
                      {modelDropdown ? <FaAngleUp className="arrow-icon" /> : <FaAngleDown className="arrow-icon" />}
                    </h3>
                  </div>
                  {modelDropdown && (
                    <div className="dropdown-content">
                      <div>
                        {modelOptions.map((model) => (
                          <div key={model}>
                            <label htmlFor={model} className="model-label">
                              <input
                                type="checkbox"
                                id={model}
                                value={model}
                                checked={checkedMakes.includes(model)}
                                onChange={() => handleCheckboxClick(model, true)}
                                style={{ marginRight: '5px' }}
                              />
                              <span>{model}</span>
                            </label>
                            {filteredResults[model] && (
                              <div className="filtered-results">
                                <div>
                                  <ul>
                                    {filteredResults[model].map((car, index) => (
                                      <li key={index}>
                                        {car.model === 'Camry' ? 
                                          (<Link to="/Login">{`${car.make} ${car.model}`}</Link>) 
                                        : 
                                          (<Link to="/Posting">{`${car.make} ${car.model}`}</Link>)
                                        
                                        }
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}

                        <div className='search'>
                          <button onClick={handleSearchClick} style={{ marginLeft: '10px' }}>
                            <p>Search</p>
                          </button>
                          <button onClick={handleClearClick} style={{ marginLeft: '10px' }}>
                            <p>Clear</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </li>


                <li>
                <div className="arrow-container">
                    <h3 onClick={() => toggleDropdown('make')}>
                      <p>Make</p>
                      {makeDropdown ? <FaAngleUp className="arrow-icon" /> : <FaAngleDown className="arrow-icon" />}
                    </h3>
                  </div>
                  {makeDropdown && (
                    <div className="dropdown-content">
                      {makeOptions.map((make) => (
                        <div key={make}>
                          <label htmlFor={`make-${make}`} className="make-label">
                            <input
                              type="checkbox"
                              id={`make-${make}`}
                              value={make}
                              checked={checkedMake.includes(make)}
                              onChange={() => handleMakeCheckboxClick(make)}
                              style={{ marginRight: '5px' }}
                            />
                            {make === 'Toyota' && <Link to="/">{make}</Link>}
                            {make === 'Honda' && <Link to="/">{make}</Link>}
                            {make === 'BMW' && <Link to="/">{make}</Link>}
                            {make === 'Tesla' && <Link to="/">{make}</Link>}
                            {make === 'Chevrolet' && <Link to="/">{make}</Link>}
                            {make === 'Ford' && <Link to="/">{make}</Link>}
                          </label>
                        </div>
                      ))}
                      <div className="search">
                        <button onClick={handleMakeClearClick} style={{ marginLeft: '10px' }}>
                          <p>Clear</p>
                        </button>
                      </div>
                    </div>
                  )}
                </li>


                <li>
                <div className="arrow-container">
                    <h3 onClick={() => toggleDropdown('years')}>
                      <p>Years</p>
                      {yearsDropdown ? <FaAngleUp className="arrow-icon" /> : <FaAngleDown className="arrow-icon" />}
                    </h3>
                  </div>
                  {yearsDropdown && (
                    <div className="dropdown-content">
                      {['2020-Today', '2010-2020', '2000-2010', '1990-2000', '1980-1990', '< 1980'].map((year) => (
                        <div key={year}>
                          <label htmlFor={`year-${year}`} className="year-label">
                            <input
                              type="checkbox"
                              id={`year-${year}`}
                              value={year}
                              checked={checkedYears.includes(year)}
                              onChange={() => handleYearCheckboxClick(year)}
                              style={{ marginRight: '5px' }}
                            />
                            {year == '2020-Today' && <Link to="/">{year}</Link>}
                            {year == '2010-2020' && <Link to="/">{year}</Link>}
                            {year == '2000-2010' && <Link to="/">{year}</Link>}
                            {year == '1990-2000' && <Link to="/">{year}</Link>}
                            {year == '1980-1990' && <Link to="/">{year}</Link>}
                            {year == '< 1980' && <Link to="/">{year}</Link>}
                          </label>
                        </div>
                      ))}
                      <div className="search">
                        <button onClick={handleYearClearClick} style={{ marginLeft: '10px' }}>
                          <p>Clear</p>
                        </button>
                      </div>
                    </div>
                  )}
                </li>

                <li>
                <div className="arrow-container">
                    <h3 onClick={() => toggleDropdown('price')}>
                      <p>Price</p>
                      {priceDropdown ? <FaAngleUp className="arrow-icon" /> : <FaAngleDown className="arrow-icon" />}
                    </h3>
                  </div>
                  {priceDropdown && (
                    <div className="dropdown-content">
                      {['$0,000 - $10,000', '$10,000 - $25,000', '$25,000 - $50,000', '$50,000 & up'].map((price) => (
                        <div key={price}>
                          <label htmlFor={`price-${price}`} className="price-label">
                            <input
                              type="checkbox"
                              id={`price-${price}`}
                              value={price}
                              checked={checkedPrices.includes(price)}
                              onChange={() => handlePriceCheckboxClick(price)}
                              style={{ marginRight: '5px' }}
                            />
                            {price === '$0,000 - $10,000' && <Link to="/">{price}</Link>}
                            {price === '$10,000 - $25,000' && <Link to="/">{price}</Link>}
                            {price === '$25,000 - $50,000' && <Link to="/">{price}</Link>}
                            {price === '$50,000 & up' && <Link to="/">{price}</Link>}
                          </label>
                        </div>
                      ))}
                      <div className="search">
                        <button onClick={handlePricesClearClick} style={{ marginLeft: '10px' }}>
                          <p>Clear</p>
                        </button>
                      </div>
                    </div>
                  )}
                </li>

                <li>
                  <div className="arrow-container">
                    <h3 onClick={() => toggleDropdown('mileage')}>
                      <p>Mileage</p>
                      {mileageDropdown ? <FaAngleUp className="arrow-icon" /> : <FaAngleDown className="arrow-icon" />}
                    </h3>
                  </div>
                  {mileageDropdown && (
                    <div className="dropdown-content">
                      {['0 - 25,000 miles', '25,000 - 75,000 miles', 
                      '75,000 - 125,000 miles', '125,000 miles & up'].map((mileage) => (
                        <div key={mileage}>
                          <label htmlFor={`mileage-${mileage}`} className="mileage-label">
                            <input
                              type="checkbox"
                              id={`mileage-${mileage}`}
                              value={mileage}
                              checked={checkedMileages.includes(mileage)}
                              onChange={() => handleMileageCheckboxClick(mileage)}
                              style={{ marginRight: '5px' }}
                            />
                            {mileage === '0 - 25,000 miles' && <Link to="/">{mileage}</Link>}
                            {mileage === '25,000 - 75,000 miles' && <Link to="/">{mileage}</Link>}
                            {mileage === '75,000 - 125,000 miles' && <Link to="/">{mileage}</Link>}
                            {mileage === '125,000 miles & up' && <Link to="/">{mileage}</Link>}
                          </label>
                        </div>
                      ))}
                      <div className="search">
                        <button onClick={handleMileageClearClick} style={{ marginLeft: '10px' }}>
                          <p>Clear</p>
                        </button>
                      </div>
                    </div>
                  )}
                </li>

              </div>
            </div>
          </div>


           {/* This code is what populates the home screen with posts */}
          <div className="container">
            <div className="products-con">

              {/* Start Posting Box */}

              {/* Basically a For each loop */}
              {/* We want to see many posts*/}
              {posts && posts.map((post) =>(
               
                filter(post) && 
                <div className="test2" key={post.id}> 
                  
                    <a onClick={() => { handlePostBoxClick(post, post._id) }}>
                        <div className='products-item'>
                          <div className='products-img'>
                          { /* Need to be able to pull image from DB */ }
                            <img
                            src="https://images.offerup.com/4uQVF_BU-_3APQkmUNUmGB3xqhE=/1280x960/d3ed/d3ed001efeac469097afcb8638e4ca76.jpg"
                            alt="Picture Failure"
                            />
                          </div>
                        
                          <div className='products-detail'>
                            <h3>{post.year} {post.make} {post.model}</h3>
                          </div>
                          <div className='products-price'>
                            <div className='products-left'>
                              <h3>${post.price}</h3>
                            </div> 
                          </div>
                          <div className='meleage-city'>
                            <div className='mileage'>
                              <div className='mileage-left'>
                                <div className='mile-image'>
                                  <img src="https://icons.veryicon.com/png/o/business/menu-icon-of-sanitation-industry/operating-mileage.png" alt="Car Image" />
                                </div>
                                <h4>{post.mileage} Miles</h4>
                              </div>
                            </div>
                            <div className='city'>
                              <div className='city-right'>
                                <h4>{post.location}</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      
                    </a>
                 </div>
              
                  
                  ))}
                  
                  {/* End Posting Box */}
                
            </div>    
          </div>
        </div>
      </div>


      <div className="arrows">
        <span>Go to Next Page</span>
          <Link to="/HomeIndex" className="link-with-arrow">
            <BsFillArrowRightSquareFill />
          </Link>
        </div>

      <div className='footer'>
        <p>2023</p>
      </div>

    </section>
  );
};

export default HomeIndex;
