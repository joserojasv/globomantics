import currencyFormatter from "../helpers/currencyFormatter";
import { useLocation } from "react-router";
import Bids from "./Bids";

const House = () => {
    //const { id } = useParams();
    const { state } = useLocation();
    const house = state?.house;

    if (!house) return <div>No house selected</div>;

    const photoPath = house.photo
        ? `/houseImages/${house.photo}.jpg`
        : "/defaultPhoto.png";

    console.log("Photo path:", photoPath);

    return (
        <div className="row">
            <div className="col-6">
                <div className="row">
                    <img className="img-fluid" src={photoPath} alt="House pic" />
                </div>
            </div>
            <div className="col-6">
                <div className="row">
                    <h5 className="col-12">{house.country}</h5>
                </div>
                <div className="row">
                    <h5 className="col-12">{house.address}</h5>
                </div>
                <div className="row">
                    <h5 className="themeFontColor col-12">
                        {currencyFormatter.format(house.price)}
                    </h5>
                </div>
                <div className="row">
                    <div className="col-12 mt-3">{house.description}</div>
                </div>
                <Bids house={house} />
            </div>
        </div>
    );
};

export default House;
