import React, { useState } from 'react';

const ColorForm = (props) => {

    const [box, setBox] = useState([{}]);
    console.log("Start of form",box);
    const [ inputColor, setInputColor] = useState("")
    const [ inputHeight, setInputHeight] = useState("100")
    const [ inputWidth, setInputWidth] = useState("100")

    const addBox = (e) =>{
        e.preventDefault();
        setBox([{color:inputColor,height:inputHeight,width:inputWidth}]);
        props.boxFromForm(inputColor,inputHeight,inputWidth);
        setInputColor("")
        setInputHeight("100")
        setInputWidth("100")


        console.log("**************submitted**************")
        console.log("This is the addBox function",inputColor)
        console.log("This is the addBox function",box)
        

    };
    // const handleChange = (e) => {
    //     setInputColor({
    //         [e.target.name]: e.target.value
    //     });
    //     console.log(inputColor)
    // }

    return(

        <form className="form-group" onSubmit={addBox}>
                <div>
                    <input
                        required
                        placeholder = "Input a color"
                        name="inputColor"
                        type="text"
                        onChange= { (e) => setInputColor(e.target.value) }
                        value = {inputColor}/>
                    <input
                        required
                        name="inputHeight"
                        type="text"
                        onChange= { (e) => setInputHeight(e.target.value) }
                        value = {inputHeight}/>
                    <input
                        required
                        name="inputWidth"
                        type="text"
                        onChange= { (e) => setInputWidth(e.target.value) }
                        value = {inputWidth}/>
                    <input type="submit" value="Add Box" />
                </div>
                {/* <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            <div style={{color:"black"}}>
                {JSON.stringify(inputColor)}
            </div> */}
        </form>


    )




}
export default ColorForm

// *********************************************BACKUP

// import React, { useState } from 'react';

// const ColorForm = (props) => {

//     const [boxes, setBoxes] = useState([{color:"red"},{color:"blue"}]);
//     console.log("Start of form",boxes);
//     const [ inputColor, setInputColor] = useState("")

//     const addBox = (e) =>{
//         e.preventDefault();
//         setBoxes([...boxes,{color:inputColor}]);
//         props.addNewBox(boxes);        
//         console.log("This is the addBox function",inputColor)
//         console.log("This is the addBox function",boxes)
        

//     };
//     // const handleChange = (e) => {
//     //     setInputColor({
//     //         [e.target.name]: e.target.value
//     //     });
//     //     console.log(inputColor)
//     // }

//     return(

//         <form className="form-group" onSubmit={addBox}>
//                 <div>
//                     <input  name="inputColor" type="text" onChange= { (e) => setInputColor(e.target.value) } value={inputColor}/>
//                     <input type="submit" value="Add Box" />
//                 </div>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <br/>
//             <div style={{color:"black"}}>
//                 {JSON.stringify(inputColor)}
//             </div>
//         </form>


//     )




// }
// export default ColorForm