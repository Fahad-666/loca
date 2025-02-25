import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
    const [location, setLocation] = useState<string>("Fetching location...");
    const [coordinates, setCoordinates] = useState<{ lat: number; lon: number } | null>(null);
    const [ip, setIp] = useState<string>("Fetching IP...");

    useEffect(() => {
        // Get user's coordinates
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setCoordinates({ lat: latitude, lon: longitude });
                },
                (error) => {
                    setLocation("Location access denied!");
                    console.error("Geolocation error:", error);
                }
            );
        } else {
            setLocation("Geolocation is not supported by your browser.");
        }

        // Get user's IP and location data using ip-api.com (No API key required)
        axios.get("http://ip-api.com/json")
            .then((response) => {
                const { query, city, regionName, country } = response.data;
                setIp(query);
                setLocation(`${city}, ${regionName}, ${country}`);
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
                <p><strong>Coordinates:</strong> {coordinates.lat}, {coordinates.lon}</p>
            )}
        </div>
    );
};

export default App;
