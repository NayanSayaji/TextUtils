import React from 'react'

function Alert(props) {
  // making a word capitalize
  const capitalize = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
      <div style={{height:'50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show mx-5 p-3`} role="alert">
          <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
      </div>}
      </div>
  )
}

export default Alert