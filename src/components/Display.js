/*import React from 'react'

const Display = (props)=>{
    console.log("hey hi", props)

    const renderlist = props.newsdata.map((data)=>{
        return (<div>
             {data.titile}
        </div>
     ) })

    return(
<div>
    {renderlist}
</div>
    )
}

export default Display;*/


import React from 'react'
const Display = (props)=>{
     

    const renderlist = props.newsdata.map((data)=>{
        return(
            <div>
                <h2>{data.titile}</h2>
                <h3>{data.id}</h3>
            </div>
        )
    })
    return(
        <div>
            {renderlist}
        </div>
         
    )
}

export default Display;