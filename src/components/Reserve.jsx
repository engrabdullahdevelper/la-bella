import { useState } from "react";
function Reserve() {
   const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests:"1 person",
   });
  
    return(
    <section className="reservation-section" id="reserve">
    <p className="section-tag" style={{color: 'var(--gold)'}}>Book Your Experience</p>
    <h2 className="section-title">Reserve a <em style={{color: 'var(--gold-light)'}}>Table</em></h2>
    <div className="section-line" style={{margin: '0 auto 1.5rem'}}></div>
    <p>Join us for an unforgettable dining experience. Reservations recommended for weekends.</p>
    <div className="reservation-form">
      <div className="form-group">
        <label>Full Name</label>
        <input type="text" placeholder="Your name" value= {formData.name} onChange={(e) => setFormData({...formData, name : e.target.value})}/>
      </div>
      <div className="form-group">
        <label>Date</label>
        <input type="date" value={formData.date} onChange={(e) => setFormData({...formData, date : e.target.value})}/>
      </div>
      <div className="form-group">
        <label>Time</label>
        <input type="time" value={formData.time} onChange={(e) => setFormData({...formData, time: e.target.value})}/>
      </div>
      <div className="form-group">
        <label>Guests</label>
        <select value={formData.guests} onChange={(e) => setFormData({...formData, guests: e.target.value})}>
          <option>1 Person</option>
          <option>2 People</option>
          <option>3-4 People</option>
          <option>5+ People</option>
        </select>
      </div>
    </div>
    <button className="btn-reserve" onClick={() => {
      console.log(formData);
      alert(`Reservation confirmed for ${formData.name}!`);  
    }}>Confirm Reservation</button>
  </section>
    );
}

 export default Reserve;