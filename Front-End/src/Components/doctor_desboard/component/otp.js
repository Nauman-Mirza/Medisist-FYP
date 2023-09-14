import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillShieldLockFill, BsTelephoneFill } from 'react-icons/bs';
import { CgSpinner } from 'react-icons/cg';
import { auth } from '../../../firebase.config';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { toast, Toaster } from 'react-hot-toast';
import './otp.css';

function DoctorOTP() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [ph, setPh] = useState('');
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        'recaptcha-container',
        {
          size: 'invisible',
          callback: (response) => {
            onSignup();
          },
          'expired-callback': () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = '+' + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success('OTP sent successfully!');
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    const otpCode = otp.join('');

    window.confirmationResult
      .confirm(otpCode)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  function handleChange(index, value) {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  
    // Move to the next input field
    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  }

  return (
    <section className="section">
      <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ? (
          navigate('/Main-deshboard')
        ) : (
          <div className="otp-welcome">
            <div className="otp-logo-login">
              <img className="otp-logo1-login" src="logo.jpg" alt="Logo" />
            </div>
            <p className="welcomeh1">Medisist</p>
            {showOTP ? (
              <>
                <div className="icon1">
                  <BsFillShieldLockFill size={30} /> &nbsp; Enter your OTP
                </div>

                <div className="otp-inputs">
                  {otp.map((digit, index) => (
                    <input
                    key={index}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    type="text"
                    min="0"
                    max="9"
                    autoFocus={index === 0}
                    className="-pat-otp-input"
                    id={`otp-input-${index}`}
                  />
                  ))}
                </div>

                <button onClick={onOTPVerify} className="btton signup">
                  {loading && <CgSpinner size={20} className="loadingspiner" />}
                  Verify OTP
                </button>
              </>
            ) : (
              <>
                <div className="number">
                  <BsTelephoneFill size={20} /> &nbsp; Please enter your phone number
                </div>

                <input
                  type="tel"
                  className="num-otp"
                  placeholder="+92-XXX-XXXXXXX"
                  onChange={(e) => setPh(e.target.value)}
                />
                <button onClick={onSignup} className="btton signup">
                  {loading && <CgSpinner size={20} className="loadingspiner" />}
                  Send code via SMS
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default DoctorOTP;