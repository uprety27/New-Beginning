import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// style also written here in component
   // const StyleCard={
       // backgroundColor:"#f0f0f0",
    //};

 
   

    /* optimising above and alternative method given above

                <RestaurantCard resData={resList[0]}/>
                <RestaurantCard resData={resList[1]}/>
                <RestaurantCard resData={resList[2]}/>
                <RestaurantCard resData={resList[3]}/>
                <RestaurantCard resData={resList[4]}/>
                <RestaurantCard resData={resList[5]}/>
                <RestaurantCard resData={resList[6]}/>  */

const AppLayout=()=>
{
    return(
        <div className="app">
        {Header()}
        <Body/>
        </div>
    );
};
const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(<AppLayout/>);


    