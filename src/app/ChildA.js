"use client";
import { useState } from "react";
import "./ChildA.css";

function ChildA() {
    const [checked, setChecked] = useState(false);
    function handleCheckboxChange(event) {
        setChecked(event.target.checked);
    };

    return (
        <div className="container">
            <input 
                id="checkBoxed"
                type="checkbox"
                onChange={handleCheckboxChange}
            />
            <label>Check me!</label>

            <p className="p-tag">ABC</p>
        </div>
    );
}

export default ChildA;
