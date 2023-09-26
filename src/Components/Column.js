import React from 'react'

function Column() {
  const items = []
  return (
    // <React.Fragment>
    //     {
    //       items.map( items => (
    //         <React.Fragment key={items.id}>
    //           <h1>Title</h1>
    //           <p>{items.title}</p>
    //         </React.Fragment>
    //       ))
    //     }
    // </React.Fragment>
    <>
      <td>Name</td>
      <td>Neel</td>
    </>
  )
}

export default Column