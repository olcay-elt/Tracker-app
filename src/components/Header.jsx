import React from 'react'

const Header = ({ displaying, setDisplaying }) => {
    return (
        <div>
            <h1>Task Tracker</h1>
            <button className='btn btn-primary'
                onClick={() =>
                    setDisplaying(!displaying)
                }
            >
                Toggle Task Bar
            </button>

        </div>
    )
}

export default Header;