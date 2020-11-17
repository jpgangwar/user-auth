import React from 'react'

export default function login(props) {
    const { email, 
            setEmail, 
            password, 
            setPassword, 
            emailError, 
            passwordError, 
            handleLogin,
            handleSignUp, 
            hasAccount, 
            setHasAccount
    } = props;

    return (
        <div className="login">
            <div className="loginContainer">
                <label>Email</label>
                <input
                    type="text"
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input
                    type="password"
                    autoFocus
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin}>LogIn</button>
                            <p>Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                        </>
                    ): (
                        <>
                            <button onClick={handleSignUp}>SignUp</button>
                            <p>Have an account ? <span onClick={() => setHasAccount(!hasAccount)}>LogIn</span></p>
                        </>
                    )}
                    
                </div>
            </div>
        </div>
    )
}
