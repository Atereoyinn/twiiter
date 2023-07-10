import { useState } from 'react';
import LoginInput from "../../components/LoginInput";

const DateFormat = () => {
    
    const [date, setDate] = useState({
        day: "",
        month: "",
        year: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setDate((prevDate) => ({ ...prevDate, [name]: value }));
        console.log(date.day, date.month, date.year)
      };

  return (
    <div style={{display:"flex",width:"30vw",padding:"30px",justifyContent:"center",alignItems:"space-between"}}>
      <LoginInput style={{width:"30%"}}
        type="text"
        name="month"
        placeholder="Month"
        value={date.month}
        onChange={handleChange}
        maxLength="2"
      />
      <span >/</span>
      <LoginInput style={{width:"30%"}}
        type="text"
        name="day"
        placeholder="Day"
        value={date.day}
        onChange={handleChange}
        maxLength="2"
      />
      <span >/</span>
      <LoginInput style={{flex:"1"}}
        type="text"
        name="year"
        placeholder="Year"
        value={date.year}
        onChange={handleChange}
        maxLength="4"
      />
    </div>
  )
}
export default DateFormat