import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
    const [location, setLocation] = useState<string>("Fetching location...");
    const [coordinates, setCoordinates] = useState<{ lat: number; lon: number } | null>(null);
    const [ip, setIp] = useState<string>("Fetching IP...");

    useEffect(() => {
        // Fetch IP-based location data without permission
        axios.get("http://ip-api.com/json")
            .then((response) => {
                const { query, city, regionName, country, lat, lon } = response.data;
                setIp(query);
                setLocation(`${city}, ${regionName}, ${country}`);
                setCoordinates({ lat, lon }); // Approximate coordinates based on IP
            })
            .catch((error) => {
                console.error("Error fetching IP info:", error);
                setLocation("Could not fetch location.");
            });
    }, []);

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>Your Location Info</h2>
            <p><strong>IP Address:</strong> {ip}</p>
            <p><strong>Location:</strong> {location}</p>
            {coordinates && (
                <p><strong>Approx. Coordinates:</strong> {coordinates.lat}, {coordinates.lon}</p>
            )}
        </div>
    );
};

export default App;
