import React, { useState } from "react";
import axios from "axios";

const FormRecognition = () => {
    const [formData, setFormData] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const resp = await axios.post("http://localhost:5000/form-recognition", {
            formUrl: e.target["url"].value
        });
        console.log(resp.data)
        setFormData(resp.data);
    }

    return (
        <div className="line">
            <form onSubmit={handleSubmit}>
                <input type="text" name="url" />
                <button type="submit"> Get form datas </button>
            </form>
            <h4>Form dats:</h4>
            <div>
                {formData.entities?.map((item, index) => {
                    if (index < 10)
                        return (
                            <div key={index}>
                                <p> Category: {item.category} </p>
                                <p> Subcategory: {item.subCategory} </p>
                                <p> Content: {item.content} </p>
                                <br></br>
                            </div>
                        )
                })}
            </div>

        </div>
    );
};

export default FormRecognition;