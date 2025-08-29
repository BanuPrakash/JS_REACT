import React, { memo } from 'react'

function AgeComponent({age}) {
    console.log("AgeComponent renders!!")
    return (
        <div>Age in AgeComponent : {age}</div>
    )
}

export default memo(AgeComponent);

/*
    Abstract code..
    function memo(Component) {
        let propsCache = {};
        return function(props) {
            if(!propsCache[props]) {
                propsCache[props] = props;
                return Component(props);
            }
            return;
        }
    }
*/