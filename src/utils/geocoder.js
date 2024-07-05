export async function getCoordinates(address) {
    const accessToken = import.meta.env.VITE_MAPBOX_API_KEY; // Replace with your Mapbox access token
    const encodedAddress = encodeURIComponent(address);
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedAddress}.json?access_token=pk.eyJ1Ijoicm9uYWstY2hvcmRpYSIsImEiOiJjbHV1cnB2NXowOWh0MmtwamFleDJ5eHNrIn0.qraVk2myMWGOTy4OnS-txw`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      if (data.features && data.features.length > 0) {
        const coordinates = data.features[0].geometry.coordinates;
        // Mapbox returns coordinates in [longitude, latitude] format
        return [coordinates[1], coordinates[0]]; // Convert to [latitude, longitude] format
      } else {
        throw new Error('No results found');
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  
  

  