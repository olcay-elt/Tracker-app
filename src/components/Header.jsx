import React from 'react'

const Header = ({ displaying, setDisplaying }) => {
    return (
        <div className='text-center'>
            <h1>Task Tracker</h1>
            <button className='btn btn-info'
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