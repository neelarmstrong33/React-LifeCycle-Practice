import React from 'react'

function MemoComponent({name}) {
    console.log("rendering the memo Component");
  return (
    <div>
        {name}
    </div>
  )
}

export default React.memo(MemoComponent)