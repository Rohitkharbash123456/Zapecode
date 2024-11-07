import './Myform.css';
import { useState } from "react";


function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
      <input 
        type="text" 
        name="first name" 
        placeholder='First Name'
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
    
      <label>
        <input 
          type="text" 
          name="last name" 
          placeholder='Last Name'
          value={inputs.age || ""} 
          onChange={handleChange}
        />
       </label>

       <label>
        <input 
          type="text" 
          name="email" 
          placeholder='E Mail'
          value={inputs.age || ""} 
          onChange={handleChange}
        />
       </label>

       <label>
        <input 
          type="number" 
          name="phone number" 
          placeholder='Phone Number'
          value={inputs.number || ""} 
          onChange={handleChange}
        />
       </label>

       <input id="mes"
          type="text" 
          name="message" 
          placeholder='Message'
          value={inputs.message || ""} 
          onChange={handleChange}
        />

<input id="sub" type="submit"
value={inputs.submit || "Free Consultation"}
/>
        
    </form>
  )
}
 export default MyForm;