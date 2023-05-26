import React, { useState } from 'react'
import './LoginComponent.scss'
export default function LoginComponent() {
    const [email, setEmail] = useState()
    const [pass, setPass] = useState()

    const [hidden, setHidden] = useState(true)
    const dataLogin = {
        email: email,
        password: pass,
    }
    const handleEmail = (event) => {
        console.log(event.target.value);
        setEmail(event.target.value)
    }
    const handlePass = (event) => {
        setPass(event.target.value)
    }

    return (
        <div>
            <div className='login'>
                <div>
                    <img src={'/img/logoNike/nikeLogo.jpg '} alt="" style={{ width: '55px', height: '50px', cursor: 'pointer' }} />
                </div>
                <div>
                    <h3>YOUR ACCOUNT FOR
                        <br /> EVERYTHING NIKE</h3>
                </div>
                <div>
                    <input onChange={(e) => handleEmail(e)} type="text" placeholder='Email address' style={{paddingLeft:'15px', width: '300px', height: '30px',borderRadius:'3px'}} />
                    <br />
                    <input onChange={(e) => handlePass(e)} type="text" placeholder='Password' style={{paddingLeft:'15px', width: '300px', height: '30px',borderRadius:'3px' }} />
                    <br />
                    <div className='check'>
                        <input className='check-box' type="checkbox" />
                        <span className='check-script'>Keep me sign in</span>
                        <a href="" style={{fontSize:'12px',textDecoration:'none',color: '#8d8d8d'}}>Forgotten your password?</a>

                    </div>
                    <div className='policy'>
                        <span>By logging in, you agree to Nike's <a href="" style={{color: '#8d8d8d'}}>Privacy Policy</a> and
                            <br />
                            <a href="" style={{color: '#8d8d8d'}}>Terms of Use.</a>
                        </span>
                    </div>
                    <button style={{ width: '312px', height: '40px' ,cursor:'pointer'}}>SIGN IN</button>
                </div>

                <div className='notMember'>
                    <span>Not a Member? </span>
                    <a href="" onClick={() => setHidden(!hidden)} style={{color: 'black'}}>Join Us</a>
                </div>
            </div>
        </div>
    )
}
