import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListGroup({ searchQuery }) {
    const [imageResults, setImageResults] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const ShreeApiKey = ;
                const shreecx = ;
                const searchUrl = ;
                const response = await axios.get(searchUrl);
                setImageResults(response.data.items.slice(0, 4));
                setLoading(false);
            } catch (error) {
                console.error('Error fetching image results:', error);
                setLoading(false);
            }
        };

        if (searchQuery) {
            fetchData();
        }
    }, [searchQuery]);

    return (
        <main className="aiImg-main">
            {loading ? (
                <p>Generating...</p>
            ) : (
                <div id="imageResults" className="aiImg-imageResults">
                    {imageResults.map((result, index) => (
                        <div className="aiImg-image-container" key={index}>
                            <img src={result.link} alt={result.title} className="aiImg-img" />
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
}

export default ListGroup;
