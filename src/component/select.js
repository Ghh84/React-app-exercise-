import React from "react";

const Select = ({ name, label, options, error, handleChange,...rest }) => {
  return (
    <div className="input-group input-group-lg">
        <span className="input-group-text" id="inputGroup-sizing-lg">{label}</span>
        <select className="form-select" id="inputGroupSelect01" onChange={(e)=>handleChange(e.target.value)}>
            <option>Choose...</option>
            {options.map((c)=>{
                return <option value={c[1]} key={c[1]}>{c[0]}</option>
            })}
        </select>
    </div>
  );
};

export default Select;