import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './FlightSection.css';

const FlightSection = () => {
  const [category, setCategory] = useState('one-way');
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departDate: null,
    returnDate: null,
    adults: '1',
    classType: 'economy',
    paymentSystem: 'mastercard',
  });
  const [multiCityForms, setMultiCityForms] = useState([getNewMultiCityForm()]);

  function getNewMultiCityForm() {
    return {
      from: '',
      to: '',
      departDate: null,
      adults: '1',
      classType: 'economy',
      paymentSystem: 'mastercard',
    };
  }

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    resetFormData();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleDateChange = (name, date) => {
    setFormData((prevFormData) => ({ ...prevFormData, [name]: date }));
  };

  const resetFormData = () => {
    setFormData({
      from: '',
      to: '',
      departDate: null,
      returnDate: null,
      adults: '1',
      classType: 'economy',
      paymentSystem: 'mastercard',
    });
  };

  const handleAddFlight = () => {
    setMultiCityForms([...multiCityForms, getNewMultiCityForm()]);
  };

  const handleRemoveFlight = (index) => {
    const updatedForms = [...multiCityForms];
    updatedForms.splice(index, 1);
    setMultiCityForms(updatedForms);
  };
  const handleToggleFromTo = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      from: prevFormData.to,
      to: prevFormData.from,
    }));
  };

  return (
    <div className="flight-section">
      <h2>Flight Section</h2>
      <div className="category-toggle">
        <label>
          <input
            type="radio"
            value="one-way"
            checked={category === 'one-way'}
            onChange={handleCategoryChange}
          />
          One-Way
        </label>
        <label>
          <input
            type="radio"
            value="round-trip"
            checked={category === 'round-trip'}
            onChange={handleCategoryChange}
          />
          Round-Trip
        </label>
        <label>
          <input
            type="radio"
            value="multi-city"
            checked={category === 'multi-city'}
            onChange={handleCategoryChange}
          />
          Multi-City
        </label>
      </div>

      {category === 'one-way' && (
        <form className="search-form" >
          {/* onSubmit={handleSubmit}f */}
          <div className="form-group">
            <label>From:</label>
            <input
              type="text"
              name="from"
              value={formData.from}
              onChange={handleInputChange}
              required
            />
            <button
              type="button"
              className="toggle-button"
              onClick={() =>
                setFormData({
                  ...formData,
                  from: formData.to,
                  to: formData.from,
                })
              }
            >
              &#8646;
            </button>
            <label>To:</label>
            <input
              type="text"
              name="to"
              value={formData.to}
              onChange={handleInputChange}
              required
            />
            <label>Depart:</label>
            <DatePicker
              selected={formData.departDate}
              onChange={(date) => handleDateChange('departDate', date)}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              required
            />
          </div>
          <div className="form-group">
            <label>Adults:</label>
            <select
              name="adults"
              value={formData.adults}
              onChange={handleInputChange}
              required
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <label>Class:</label>
            <select
              name="classType"
              value={formData.classType}
              onChange={handleInputChange}
              required
            >
              <option value="economy">Economy</option>
              <option value="premium">Premium</option>
            </select>
            <label>Payment System:</label>
            <select
              name="paymentSystem"
              value={formData.paymentSystem}
              onChange={handleInputChange}
              required
            >
              <option value="mastercard">MasterCard</option>
              <option value="visacard">VisaCard</option>
              <option value="banktransfer">Bank Transfer</option>
            </select>
          </div>
          <button className='SubmitButton' type="submit">Search</button>
        </form>
      )}

      {category === 'round-trip' && (
        <form className="search-form" >
          {/* onSubmit={handleSubmit} */}
          <div className="form-group">
            <label>From:</label>
            <input
              type="text"
              name="from"
              value={formData.from}
              onChange={handleInputChange}
              required
            />
            <button
              type="button"
              className="toggle-button"
              onClick={() =>
                setFormData({
                  ...formData,
                  from: formData.to,
                  to: formData.from,
                })
              }
            >
              &#8646;
            </button>
            <label>To:</label>
            <input
              type="text"
              name="to"
              value={formData.to}
              onChange={handleInputChange}
              required
            />
            <label>Depart:</label>
            <DatePicker
              selected={formData.departDate}
              onChange={(date) => handleDateChange('departDate', date)}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              required
            />
            <label>Return:</label>
            <DatePicker
              selected={formData.returnDate}
              onChange={(date) => handleDateChange('returnDate', date)}
              dateFormat="dd/MM/yyyy"
              minDate={formData.departDate || new Date()}
              required
            />
          </div>
          <div className="form-group">
            <label>Adults:</label>
            <select
              name="adults"
              value={formData.adults}
              onChange={handleInputChange}
              required
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <label>Class:</label>
            <select
              name="classType"
              value={formData.classType}
              onChange={handleInputChange}
              required
            >
              <option value="economy">Economy</option>
              <option value="premium">Premium</option>
            </select>
            <label>Payment System:</label>
            <select
              name="paymentSystem"
              value={formData.paymentSystem}
              onChange={handleInputChange}
              required
            >
              <option value="mastercard">MasterCard</option>
              <option value="visacard">VisaCard</option>
              <option value="banktransfer">Bank Transfer</option>
            </select>
          </div>
          <button className='SubmitButton' type="submit">Search</button>
        </form>
      )}

      {category === 'multi-city' && (
        <div>
          {multiCityForms.map((multiCityForm, index) => (
            <form
              key={index}
              className="search-form"
              // onSubmit={(e) => handleSubmitMultiCity(e, index)}
            >
              <div className="form-group">
                <label>From:</label>
                <input
                  type="text"
                  name="from"
                  value={multiCityForm.from}
                  // onChange={(e) => handleInputChangeMultiCity(index, e)}
                  required
                />
                <button
                  type="button"
                  className="toggle-button"
                  onClick={() =>
                    handleToggleFromTo(index, 'from', 'to')
                  }
                >
                  &#8646;
                </button>
                <label>To:</label>
                <input
                  type="text"
                  name="to"
                  value={multiCityForm.to}
                  // onChange={(e) => handleInputChangeMultiCity(index, e)}
                  required
                />
                <label>Depart:</label>
                <DatePicker
                  selected={multiCityForm.departDate}
                  // onChange={(date) =>
                  //   handleDateChangeMultiCity(index, 'departDate', date)
                  // }
                  dateFormat="dd/MM/yyyy"
                  minDate={new Date()}
                  required
                />
                {index > 0 && (
                  <button
                    type="button"
                    className="remove-flight-btn"
                    onClick={() => handleRemoveFlight(index)}
                  >
                    &#x2716;
                  </button>
                )}
              </div>
              <div className="form-group">
                <label>Adults:</label>
                <select
                  name="adults"
                  value={multiCityForm.adults}
                  // onChange={(e) => handleInputChangeMultiCity(index, e)}
                  required
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <label>Class:</label>
                <select
                  name="classType"
                  value={multiCityForm.classType}
                  // onChange={(e) => handleInputChangeMultiCity(index, e)}
                  required
                >
                  <option value="economy">Economy</option>
                  <option value="premium">Premium</option>
                </select>
                <label>Payment System:</label>
                <select
                  name="paymentSystem"
                  value={multiCityForm.paymentSystem}
                  // onChange={(e) => handleInputChangeMultiCity(index, e)}
                  required
                >
                  <option value="mastercard">MasterCard</option>
                  <option value="visacard">VisaCard</option>
                  <option value="banktransfer">Bank Transfer</option>
                </select>
              </div>
              <button className='SubmitButton' type="submit">Search</button>
            </form>
          ))}
          <button className="add-flight-btn" onClick={handleAddFlight}>
            Add Flight
          </button>
        </div>
      )}
    </div>
  );
};

export default FlightSection;