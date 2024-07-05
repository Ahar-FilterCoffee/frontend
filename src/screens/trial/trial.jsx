import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Searcher } from '../../Components/Searcher';

const Trial = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchNearbyPlaces = async () => {
            const ngoLocations = [
                'NGO 1, JP Nagar, Bengaluru',
                'NGO 2, Koramangala, Bengaluru',
                'NGO 3, Jayanagar, Bengaluru',
                'NGO 4, Whitefield, Bengaluru',
                'NGO 5, Frazer Town, Bengaluru'
            ];

            try {
                const places = await Searcher(ngoLocations);
                setResults(places);
            } catch (error) {
                console.error('Error fetching nearby places:', error);
            }
        };

        fetchNearbyPlaces();
    }, []);

    return (
        <div>
            <h1>Nearby Places Results:</h1>
            <ul>
                {results.map((ngo, index) => (
                    <li key={index}>
                        <h2>{ngo.name}</h2>
                        <h3>Location: {ngo.location.name}, {ngo.location.city}</h3>
                        <div>
                            <h4>Nearby Places:</h4>
                            <ul>
                                {Object.entries(ngo.nearbyPlaces).map(([type, places]) => (
                                    <li key={type}>
                                        <h5>{type}</h5>
                                        <ul>
                                            {places.map((place, i) => (
                                                <li key={i}>
                                                    {place.name} - Location: {place.location} - Coordinates: {place.coordinates.join(', ')}
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Trial;
