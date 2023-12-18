import { CDN_URL } from "../utils/constants";
const RestaurantCard= (props) =>{
    const {resData}=props;
    const {name,cuisines,avgRating,costForTwo,sla,cloudinaryImageId}=resData?.data
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img
                className="res-logo" alt="res-logo"
                src={CDN_URL +
                cloudinaryImageId}
                 />

            <h4>{name}</h4>
            <h6>{cuisines.join(",")}</h6>
            <h6>{avgRating} Stars</h6>
            <h6>{costForTwo}</h6>
            <h6>{sla.deliveryTime}Mins</h6>
            
        </div>
    );
};

export default RestaurantCard;