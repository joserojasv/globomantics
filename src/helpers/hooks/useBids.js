import { useEffect, useOptimistic, useState } from "react";
import mockBidsData from "../../assets/bidsData"
import loadingStatus from "./loadingStatus"

const useBids = (houseId) => {
    const [bids, setBids] = useState([]);
    const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);
    const [optimisticBids, addOptimisticBid] = useOptimistic(bids, (bids, newBid) => [...bids, newBid]);

    useEffect(() => {
        const fetchBids = async () => {
            //const response = fetch("https://localhost:4000/bid/${houseId}");
            //const bids = await response.json();
            try {
                setLoadingState(loadingStatus.isLoading);
                // Simulate a fake API response delay (optional)
                await new Promise((resolve) => setTimeout(resolve, 500));
                // Filter bids by houseId
                const filteredBids = mockBidsData.filter(bid => bid.houseId === houseId);
                setBids(filteredBids);
                setLoadingState(loadingStatus.loaded);

            } catch {
                setLoadingState(loadingStatus.hasErrored);
            }

        };
        fetchBids();
    }, []);

    const addBid = async (bid) => {
        addOptimisticBid(bid);
        setBids([...bids, bid]);
    };
    return { bids, optimisticBids, loadingState, addBid };
};

export default useBids;