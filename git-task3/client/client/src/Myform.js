import React, { useState } from 'react';
import './MyForm.css'; // Import a separate CSS file for styling
const MyForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    day: '',
    dropdown: '',
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    radio: '',
    textbox1: '',
    textbox2: '',
  });
 const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({...prevData,[name]: checked,}));
    } else {
      setFormData((prevData) => ({...prevData,[name]: value,}));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  return (
    <div id="MyForm">
    <div className='from-title'><h1 >FORM</h1></div>
    
    <div className="form-container">
      <form onSubmit={handleSubmit}>
      <div>
          <label>ADD YOUR DATASET</label>
          <input type="text"name="textbox1"value={formData.textbox1}onChange={handleInputChange}placeholder="DATA SET NAME"/>
          <input type="text"name="textbox2"value={formData.textbox2}onChange={handleInputChange}placeholder="DATA SET DESCRIPTION"/>
        </div>
        <div>
          <label>Date of new dataset being added:</label>
          <input type="date" name="date" value={formData.date} onChange={handleInputChange} />
        </div>

        <div>
          <label>Day:</label>
          <input type="text" name="day" value={formData.day} onChange={handleInputChange} />
        </div>

        <div>
          <label>Dropdown:</label>
          <select name="dropdown" value={formData.dropdown} onChange={handleInputChange}>
            <option value="">Select the type of vehicle</option>
            <option value="option1">CAR</option>
            <option value="option2">BIKE</option>
            <option value="option3">LORRIE</option>
          </select>
        </div>

        <div>
          <label>SELECT YOUR PRICE RANGE:</label>
          <label>
            <input type="checkbox"name="checkbox1"checked={formData.checkbox1}onChange={handleInputChange}/>
            1-10 LAKHS
          </label>
          <label>
            <input type="checkbox"name="checkbox2"checked={formData.checkbox2}onChange={handleInputChange}/>10-30 LAKHS
          </label>
          <label>
            <input type="checkbox"name="checkbox3"checked={formData.checkbox3}onChange={handleInputChange}/>30 LAKHS above
          </label>
        </div>

        <div>
          <label>Select Gender:</label>
          <label>
            <input type="radio"name="radio"value="radio1"checked={formData.radio === 'radio1'}onChange={handleInputChange}/>Male</label>
          <label>
            <input type="radio" name="radio"value="radio2"checked={formData.radio === 'radio2'}onChange={handleInputChange}/>Female</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>    
  );
};

export default MyForm;

