import mapboxgl from 'mapbox-gl';

// Set your Mapbox access token here
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API_KEY;

// Function to search nearby places using Mapbox Geocoding API
export const Searcher = async (ngoLocations) => {
    const results = [];

    // Function to geocode location to get coordinates
    const geocodeLocation = async (location) => {
        try {
            const response = await fetch(
                `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=${mapboxgl.accessToken}`
            );
            const data = await response.json();
            if (data.features.length > 0) {
                const { center } = data.features[0];
                return center;
            } else {
                throw new Error('Location not found');
            }
        } catch (error) {
            console.error('Error geocoding location:', error);
            return null;
        }
    };

    // Function to search nearby places based on coordinates
    const searchPlaces = async (lng, lat) => {
        let allPlaces = [];
        let currentPage = 1;
        const limit = 10; // Number of results per request
        let continueFetching = true;

        while (continueFetching) {
            try {
                const response = await fetch(
                    `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${mapboxgl.accessToken}&types=poi&limit=${limit}&page=${currentPage}&categories=food,religious`
                );
                const data = await response.json();
                console.log(data);

                // Filter for specific POI categories (food and religious)
                const filteredPlaces = data.features.filter(feature => {
                    const category = feature.properties.category || '';
                    return category.toLowerCase().includes('food') ||
                           category.toLowerCase().includes('religious');
                }).map(feature => ({
                    name: feature.text,
                    location: feature.place_name,
                    coordinates: feature.center,
                    type: feature.properties.category // Assuming this property contains the type
                }));

                allPlaces = allPlaces.concat(filteredPlaces);

                if (data.features.length < limit) {
                    continueFetching = false; // Stop fetching if there are fewer results than the limit
                } else {
                    currentPage++;
                }
            } catch (error) {
                console.error('Error searching nearby places:', error);
                continueFetching = false;
            }
        }

        // Group places by type
        const groupedPlaces = allPlaces.reduce((acc, place) => {
            if (!acc[place.type]) {
                acc[place.type] = [];
            }
            acc[place.type].push(place);
            return acc;
        }, {});

        return groupedPlaces;
    };

    // Process each NGO location
    for (const ngo of ngoLocations) {
        const [ngoName, location, city] = ngo.split(',').map(str => str.trim());
        const coordinates = await geocodeLocation(`${location}, ${city}`);

        if (coordinates) {
            const ngoResults = { name: ngoName, location: { name: location, city }, nearbyPlaces: {} };

            const places = await searchPlaces(coordinates[0], coordinates[1]);
            ngoResults.nearbyPlaces = places;

            results.push(ngoResults);
        } else {
            console.error(`Coordinates not found for ${ngoName}, ${location}, ${city}`);
        }
    }

    return results;
};
