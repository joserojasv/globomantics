import useHouses from "../helpers/hooks/useHouses";
import HouseRow from "./HouseRow";
import LoadingIndicator from "./LoadingIndicator";
import loadingStatus from "../helpers/hooks/loadingStatus"
import ErrorBoundary from "./ErrorBoundary"


const HouseList = () => {

    //const [counter, setCounter] = useState(0);
    //setCounter(current => current + 1);
    const { houses, setHouses, loadingState } = useHouses();
    if (loadingState !== loadingStatus.loaded) {
        return <LoadingIndicator loadingState={loadingState}/>
    }
    const addHouse = () => {
        setHouses([...houses, 
             {
        id: 3,
        address: "some address 3",
        country: "ESP",
        price: 456456
    },    
        ])
    };
    return (
        <>
        <div className="row mb-2">
            <h5 className="themeFontColor text-center">
                Houses currently on the market
            </h5>
        </div>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Address</th>
                    <th>Country</th>
                    <th>Askin Price</th>
                </tr>
            </thead>
            <tbody>
                <ErrorBoundary fallback = "An error occured when selecting the house!">
                    {houses.map(h => (
                        <HouseRow key={h.id} house={h}/>
                    ))}
                </ErrorBoundary>
            </tbody>
        </table>
        <button className="btn btn-primary" onClick={addHouse}>Add</button>
        </>
    )
 };

export default HouseList;