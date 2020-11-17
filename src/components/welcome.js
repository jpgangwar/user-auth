import React from 'react'

export default function welcome({handleLogOut}) {
    return (
        <div className="hero">
            <nav>
                <h2>Wellcome!</h2>
                <button onClick={handleLogOut}>Log out</button>
            </nav>
        </div>
    )
}
