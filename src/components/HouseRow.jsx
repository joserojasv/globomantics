import currencyFormatter from "../helpers/currencyFormatter";
import { useNavigate } from "react-router";

const HouseRow = ({house}) => {
    const navigate = useNavigate();
    return (
         <tr onClick={() => navigate(`/house/${house.id}`, { state: { house } })}>
            <td>{house.address}</td>
            <td>{house.country}</td>
            <td>{currencyFormatter.format(house.price)}</td>
        </tr>              
    )  
 };

export default HouseRow;