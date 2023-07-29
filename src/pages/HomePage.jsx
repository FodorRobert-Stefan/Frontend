import React from 'react';
import './HomePage.css'

const HomePage = () => {
  return (
    <div className='HomePageContainer'>
        <div className='NoteContainer'>
            <div className='NoteHeader'>
              <h1>Note Header</h1>
            </div>

            <div className='NoteBody'>

              <div>
                  <h2 className='notes-title'>&#9782; Notes</h2>
              </div>

            </div>
        </div>
    </div>
  )
}

export default HomePage
