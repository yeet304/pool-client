import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function OTPVerify({ style, user }) {
    const [OTP, setOTP] = useState({
        otp: null
    });
    const navigate = useNavigate();
    return (
        <div id="verification" style={style}>
            <br />
            <br />
            <input type="text" id="verification_code" placeholder="verification code" onChange={(e) => setOTP({
                otp: parseInt(e.target.value)
            })} />
            <br />
            <button className="submit-button" onClick={() => {
                fetch('http://localhost:8000/signup', {
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

function SignupForm() {
    const [user, setUser] = useState({
        username: '',
        phone: '',
        email: '',
        school: '',
    });
    const [verify, setVerify] = useState({
        display: 'none'
    });
    return (
        <>
            <h2 className="title">sign up</h2>
            <input type="text" id="username" className="custom-input" placeholder="full name" onChange={(e) => setUser({
                ...user,
                username: e.target.value
            })} />
            <input type="tel" id="pnumber" className="custom-input" placeholder="U.S. phone number" onChange={(e) => setUser({
                ...user,
                phone: e.target.value
            })} />
            <input type="email" id="email" className="custom-input" placeholder="school email" onChange={(e) => setUser({
                ...user,
                email: e.target.value
            })} />
            <button className="submit-button" onClick={() => {
                console.log(JSON.stringify(user));
                fetch('http://localhost:8000/signup', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        phone: user.phone,
                        stage: 'send-info',
                        user: user
                    })
                }).then(() => {
                    setVerify({
                        display: 'block'
                    })
                });
            }}>send code</button>

            <OTPVerify style={{ display: verify.display }} user={user} />
        </>
    )
}

export default function Signup() {
    return (
        <div className="content" id="sign-up-form">
            <SignupForm />
        </div>
    )
}