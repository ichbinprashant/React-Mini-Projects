<fieldset>
    <legend>Current employment status</legend>
    
    <input 
        type="radio"
        id="unemployed"
        name="employment"
        value="unemployed"
        checked={formData.employment === "unemployed"}
        onChange={handleChange}
    />
    <label htmlFor="unemployed">Unemployed</label>
    <br />
    
    <input 
        type="radio"
        id="part-time"
        name="employment"
        value="part-time"
        checked={formData.employment === "part-time"}
        onChange={handleChange}
    />
    <label htmlFor="part-time">Part-time</label>
    <br />
    
    <input 
        type="radio"
        id="full-time"
        name="employment"
        value="full-time"
        checked={formData.employment === "full-time"}
        onChange={handleChange}
    />
    <label htmlFor="full-time">Full-time</label>
    <br />
                
</fieldset>