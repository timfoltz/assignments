import React, { useState } from 'react';

const DisplayBox = (props) => {

    console.log("PROPS from app inside display",props.box)
    // const [boxes, setBoxes] = props;
    // ,{color:props.box}
    // setBoxes([...boxes, {color: "orange"}])
    
    // console.log(props.map(color => color))
    return(
        <div style= {{display:"flex", flexWrap:"wrap"}}>{
            props.box.map( (val,idx)=> 
                <div key={idx} className="box"style ={{
                textAlign: "center",
                margin: "10px",
                height:val.height+"px",
                width:val.width+"px",
                backgroundColor: val.color}} >
                    { val.color }{val.height}x{val.width}
                    </div>
                
            )
            
        }</div>

    );




};
export default DisplayBox

// *********************************************BACKUP

// import React, { useState } from 'react';

// const DisplayBox = (props) => {

//     console.log("PROPS",props.box)
//     // const [boxes, setBoxes] = props;
//     // ,{color:props.box}
//     // setBoxes([...boxes, {color: "orange"}])
    
//     // console.log(props.map(color => color))
//     return(
//         <div style= {{display:"flex", flexWrap:"wrap"}}>
//             {/* {
//             props.map( c => 
//                 <div className="box"style ={{margin: "10px",height:"100px",width:"100px",backgroundColor: c.color}} >{ c.color }</div>
//             )
            
//         } */}
//         </div>

//     );




// };
// export default DisplayBox




