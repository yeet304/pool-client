import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function OTPVerify({style, user}) {
    const navigate = useNavigate();
    const [OTP, setOTP] = useState({
        otp: null
    });
    return (
        <div id="verification" style={style}>
            <br />
            <br />
            <input type="text" id="verification_code" placeholder="verification code" onChange={(e) => setOTP({
                otp: parseInt(e.target.value)
            })} />
            <br />
            <button className="submit-button" onClick={() => {
                fetch('http://localhost:8000/login', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        phone: user.phone,
                        stage: 'send-otp',
                        otp: OTP.otp
                    })
                }).then(() => {
                    navigate('/plan');
                });
            }}>submit code</button>
        </div>
    )
}

function LoginForm() {
    const [user, setUser] = useState({
        phone: null
    });
    const [verify, setVerify] = useState({
        display: 'none'
    });
    return (
        <>
            <h2>log in</h2>
            <input type="tel" id="phone" className="custom-input" placeholder="U.S. phone number" onChange={(e) => setUser({
                phone: e.target.value
            })}/>
            <button className="submit-button" onClick={() => {
                fetch('http://localhost:8000/login', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        phone: user.phone,
                        stage: 'request-otp'
                    })
                }).then(() => {
                    setVerify({
                        display: 'block'
                    })
                });
            }}>log in</button>

            <OTPVerify style={{display: verify.display}} user={user}/>
        </>
    )
}

export default function Login() {
    return (
        <div className="content" id="sign-in-form">
            <LoginForm />
        </div>
    )
}