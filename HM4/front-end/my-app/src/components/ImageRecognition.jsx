import React, { useState } from "react";
import axios from "axios";

const ImageRecognition = () => {
    const [imageData, setImageData] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const resp = await axios.post("http://localhost:5000/image-recognition", {
            tagsURL: e.target["url"].value
        });
        console.log(resp.data)
        setImageData(resp.data);
    }

    return (
        <div className="line">
            <form onSubmit={handleSubmit}>
                <input type="text" name="url" />
                <button type="submit"> Get image tags </button>
            </form>
            <h4>Image tags:</h4>
            <div>
                {imageData.map((item, index) => {
                    return (
                        <div key={index}>
                            <p> Name: {item.name} </p>
                            <p> Confidence: {item.confidence} </p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default ImageRecognition;