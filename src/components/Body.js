import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState,useEffect } from "react";

    
const Body=()=>
    {
        const [listofRestaurants,setlistofRestaurants]=useState(resList);
        const [searchText,setSearchText]=useState("");
        const [filteredRestaurants,setFilteredRestaurants]=useState(resList);
        console.log("Body rendered");

        useEffect(()=>{
            fetchData();
        },[]);
       // console.log("body rendered");

        const fetchData= async()=>{
            const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5729847&lng=77.32490430000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json);
        //setlistofRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]);
        };
        
        return(
            <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }
                    }
                    
                    />
                    <button onClick={()=>{
                        console.log(searchText)
                     const filteredRestaurants=listofRestaurants.filter((res)=>res.data.name.toLowerCase().includes(searchText.toLowerCase()));
                     setFilteredRestaurants(filteredRestaurants);
                        }}
                        >
                        Search</button>
                </div>
                <button className="filter-btn" onClick={()=>
                    {
                        const filteredList=listofRestaurants.filter(
                            (res)=>res.data.avgRating==4.5);
                            setlistofRestaurants(filteredList);
                            }}
                            >
                        Top Rated Restaurants
                        </button>
                </div>
            <div className="res-container">
           {filteredRestaurants.map((Restaurant)=>(
           <RestaurantCard key={Restaurant.data.id} resData={Restaurant}/>
            ))
            };
                         
        </div>        
        </div>
        );
    };

    export default Body;