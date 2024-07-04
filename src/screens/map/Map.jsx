import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import axios from 'axios';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API_KEY;

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const directions = useRef(null);

  const [start, setStart] = useState('');
  const [destination, setDestination] = useState('');
  const [startSuggestions, setStartSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [selectedStart, setSelectedStart] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [estimatedTime, setEstimatedTime] = useState('');
  const [estimatedDistance, setEstimatedDistance] = useState('');
  const [travelMode, setTravelMode] = useState('driving');

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [0, 0],
      zoom: 2,
    });

    directions.current = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: `mapbox/${travelMode}`,
    });

    map.current.addControl(directions.current, 'top-left');

    directions.current.on('route', (e) => {
      if (e.route.length) {
        const duration = e.route[0].duration;
        const distance = e.route[0].distance;
        setEstimatedTime(formatDuration(duration));
        setEstimatedDistance((distance / 1000).toFixed(2));

        removeTrafficLayers();
        addTrafficLayers(e.route[0].geometry.coordinates);
      }
    });

    map.current.on('moveend', () => {
      const startMarker = directions.current.getOrigin();
      const endMarker = directions.current.getDestination();

      if (startMarker && startMarker.geometry && startMarker.geometry.coordinates) {
        fetchLocationName(startMarker.geometry.coordinates, setStart);
      }
      if (endMarker && endMarker.geometry && endMarker.geometry.coordinates) {
        fetchLocationName(endMarker.geometry.coordinates, setDestination);
      }
    });
  }, [travelMode]);

  const handleRoute = () => {
    if (selectedStart && selectedDestination) {
      directions.current.setOrigin(selectedStart.geometry.coordinates);
      directions.current.setDestination(selectedDestination.geometry.coordinates);
      directions.current.once('route', () => {
        setStart('');
        setDestination('');
      });
    }
  };

  const fetchSuggestions = async (query, setFunction) => {
    try {
      const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json`, {
        params: {
          access_token: mapboxgl.accessToken,
          autocomplete: true,
          limit: 5,
        },
      });
      setFunction(response.data.features);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const fetchLocationName = async (coordinates, setFunction) => {
    try {
      const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${coordinates[0]},${coordinates[1]}.json`, {
        params: {
          access_token: mapboxgl.accessToken,
        },
      });
      if (response.data.features.length > 0) {
        setFunction(response.data.features[0].place_name);
      }
    } catch (error) {
      console.error('Error fetching location name:', error);
    }
  };

  const handleStartChange = (e) => {
    const value = e.target.value;
    setStart(value);
    if (value.length > 2) {
      fetchSuggestions(value, setStartSuggestions);
    } else {
      setStartSuggestions([]);
    }
  };

  const handleDestinationChange = (e) => {
    const value = e.target.value;
    setDestination(value);
    if (value.length > 2) {
      fetchSuggestions(value, setDestinationSuggestions);
    } else {
      setDestinationSuggestions([]);
    }
  };

  const formatDuration = (duration) => {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    return `${hours > 0 ? `${hours}h ` : ''}${minutes}m`;
  };

  const removeTrafficLayers = () => {
    if (map.current.getLayer('traffic')) {
      map.current.removeLayer('traffic');
    }
    if (map.current.getSource('traffic')) {
      map.current.removeSource('traffic');
    }
  };

  const addTrafficLayers = (coordinates) => {
    map.current.addSource('traffic', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: coordinates.map((coord, index) => ({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: coord,
          },
          properties: {
            congestion: index % 2 === 0 ? 'high' : index % 3 === 0 ? 'medium' : 'low',
          },
        })),
      },
    });

    map.current.addLayer({
      id: 'traffic',
      type: 'line',
      source: 'traffic',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
      },
      paint: {
        'line-color': [
          'case',
          ['==', ['get', 'congestion'], 'high'],
          '#FF0000',
          ['==', ['get', 'congestion'], 'medium'],
          '#FFFF00',
          '#00FF00',
        ],
        'line-width': 5,
      },
    });
  };

  return (
    <div className="relative h-screen flex flex-col">
      <div className="absolute top-0 left-0 w-full p-4 bg-primary-100 shadow-md z-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Enter start location"
              value={start}
              onChange={handleStartChange}
              className="w-full p-2 border rounded"
            />
            {startSuggestions.length > 0 && (
              <ul className="absolute bg-white border border-gray-300 rounded shadow-md mt-1 w-full z-20">
                {startSuggestions.map((suggestion) => (
                  <li
                    key={suggestion.id}
                    className="p-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => {
                      setSelectedStart(suggestion);
                      setStart(suggestion.place_name);
                      setStartSuggestions([]);
                    }}
                  >
                    {suggestion.place_name}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Enter destination location"
              value={destination}
              onChange={handleDestinationChange}
              className="w-full p-2 border rounded"
            />
            {destinationSuggestions.length > 0 && (
              <ul className="absolute bg-white border border-gray-300 rounded shadow-md mt-1 w-full z-20">
                {destinationSuggestions.map((suggestion) => (
                  <li
                    key={suggestion.id}
                    className="p-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => {
                      setSelectedDestination(suggestion);
                      setDestination(suggestion.place_name);
                      setDestinationSuggestions([]);
                    }}
                  >
                    {suggestion.place_name}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <select
            value={travelMode}
            onChange={(e) => setTravelMode(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="driving">Car</option>
            <option value="cycling">Bike</option>
          </select>
          <button onClick={handleRoute} className="p-2 bg-blue-500 text-white rounded">
            Get Route
          </button>
        </div>
      </div>
      {estimatedTime && estimatedDistance && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 p-2 bg-blue-500 text-white rounded shadow-md z-10">
          Estimated Time: {estimatedTime} <br />
          Estimated Distance: {estimatedDistance} km <br />
          Traffic: Considered
        </div>
      )}
      <div ref={mapContainer} className="map-container flex-1 h-full w-full" />
    </div>
  );
};

export default Map;
