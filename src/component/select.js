import React from "react";

const Select = ({ name, label, options, error, handleChange,...rest }) => {
  return (
    <div class="input-group input-group-lg">
        <span class="input-group-text" id="inputGroup-sizing-lg">{label}</span>
        <select class="form-select" id="inputGroupSelect01" onChange={(e)=>handleChange(e.target)}>
            <option selected>Choose...</option>
            {options.map((c)=>{
                return <option value={c[1]}>{c[0]}</option>
            })}
        </select>
    </div>
  );
};

export default Select;