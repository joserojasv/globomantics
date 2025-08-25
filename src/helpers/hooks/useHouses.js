import { useEffect, useState } from "react";
import mockHousesData from "../../assets/housesData"
import loadingStatus from "./loadingStatus"

const useHouses = () => {
    const [houses, setHouses] = useState([]);
    const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);
    useEffect(() => {
        const fetchHouses = async () => {
          //const response = fetch("https://localhost:4000/house");
          //const houses = await response.json();
        try {
          setLoadingState(loadingStatus.isLoading);
          // Simulate a fake API response delay (optional)
          await new Promise((resolve) => setTimeout(resolve, 500));
          const houses = mockHousesData;
          setHouses(houses);
         setLoadingState(loadingStatus.loaded);

        } catch
        {
            setLoadingState(loadingStatus.hasErrored);
        }
         
        };
        fetchHouses();
    }, []);
    return { houses, setHouses, loadingState };
};

export default useHouses;