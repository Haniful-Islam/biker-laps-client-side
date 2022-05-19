import { useEffect, useState } from "react";

const useBikes = () => {
    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        fetch('https://guarded-tundra-28077.herokuapp.com/bike')
            .then((response) => response.json())
            .then(data => setBikes(data));
    }, [])
    return [bikes, setBikes];
}

export default useBikes;