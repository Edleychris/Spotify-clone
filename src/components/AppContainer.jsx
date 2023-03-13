import React from 'react'

function AppContainer({children}) {
  return (
    <div style={{
      maxWidth:'1840px', 
      background:'#ddeded',
      borderRadius: '9px',
      padding: '2px 4px'
      }}>
      {children}
    </div>
  )
}

export default AppContainer