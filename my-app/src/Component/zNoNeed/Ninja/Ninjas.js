import React from 'react';

const Ninjas=({ninjas,deleteNinja})=> {
    const ninjaList = ninjas.map(each=>{
       return each.age>20 ?(
            <div key={each.id}>
                <p>Name: {each.name}</p>
                <p>Age: {each.age}</p>
                <p>belt: {each.belt}</p>
                <button onClick={()=>{deleteNinja(each.id)}}>Delete</button>
                <hr/>
            </div>           
        ):null;
    })
    return (
        <div>
            <p>This is Ningas</p>
            {ninjaList}
        </div>
    )
}

// const Ninjas=(props)=> {
//         const{ninjas} = props;
//         const ninjaList = ninjas.map(each =>{
//            if(each.age>20){
//                 return (
//                     <div key={each.id}>
//                         <p>Name: {each.name}</p>
//                         <p>Age: {each.age}</p>
//                         <p>belt: {each.belt}</p>
//                         <hr/>
//                     </div>
//                 )
//            }
//            else{
//                return null
//            }
//         })
//         return (
//             <div>
//                 <p>This is Ningas</p>
//                 {ninjaList}
//             </div>
//         )
// }
export default Ninjas

// import React, { Component } from 'react';
// class Ninjas extends Component {
//     render() {
//         const{ninjas} = this.props;
//         //const ninjas = this.props.ninjas;//same
//         const ninjaList = ninjas.map(each =>{
//             return (
//                 <div key={each.id}>
//                     <p>Name: {each.name}</p>
//                     <p>Age: {each.age}</p>
//                     <p>belt: {each.belt}</p>
//                     <hr/>
//                 </div>
//             )
//         })
//         return (
//             <div>
//                 <p>This is Ningas</p>
//                 {ninjaList}
//             </div>
//         );
//     }
// }