import React, { memo } from 'react'

function NameComponent({name}) {
    console.log("NameComponent renders!!")
    return (
        <div>Name in NameComponent: {name} </div>
    )
}

export default memo(NameComponent);