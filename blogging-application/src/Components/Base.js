import React from 'react'

const Base = ({title="Welcome to our website",children}) => {
  return (
    <div className='container-fluid'>
        <h1>This is header</h1>

        {/* calling dynamic children */}
        {children}

        <h1>This is footer</h1>
    </div>
  )
}

export default Base