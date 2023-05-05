import React,{useEffect,useState} from 'react'
import axios, { Axios } from 'axios'

const Axiosotp = () => {
    const [mobile, setMobile] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [error, setError] = useState(null);
  
    const handleMobileChange = (event) => {
      setMobile(event.target.value);
    };
  
    const handleSendOtp = (event) => {
      event.preventDefault();
      if (/^[6-9]\d{9}$/.test(mobile)) {
        axios
          .post("https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP", { mobile: parseInt(mobile) })
          .then((response) => {
            if (response.status === 200) {
              setOtpSent(true);
              setError(null);
              setTimeout(() => {
                setOtpSent(false);
              }, 120000);
            } else {
              setError('Failed to send OTP. Please try again later.');
            }
          })
          .catch((error) => {
            console.error('Error:', error);
            setError('Failed to send OTP. Please check your network connection and try again.');
          });
      } else {
        setError('Please enter a valid Indian mobile number.');
      }
    };
  
    return (
      <div className="App">
        <form onSubmit={handleSendOtp}>
          <label htmlFor="mobile">Mobile number:</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            pattern="[6-9]\d{9}"
            value={mobile}
            onChange={handleMobileChange}
            required
          />
          <button type="submit">Send OTP</button>
        </form>
        {otpSent && <p>OTP sent successfully. Please check your mobile.</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    );
  }
  
  export default Axiosotp;
  