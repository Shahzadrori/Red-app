import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyitem } from '../redux/action';


const Container =(props)=>{
    const [values,setvalues] = useState();
    return(
        <>
            <div className='wraper'>
                <h1>WELCOME</h1>
                <h4>Let us know what  you want to buy</h4>
                <h2>Bought items </h2>
                <ul>
                    <li>{props.items}</li>
                </ul>
                <input type='text' value={values} placeholder='ENTER THE ITEM' onChange={(eve)=>setvalues(eve.target.value)} />
                <button onClick={()=> props.buyitem(values)}>Buy It</button>
            </div>
        </>
    )
}

const mapstatetoprops=(state)=>{
    return{
        items:state.items
    }

}
const mapstatetodispatch=(dispatch)=>{
    return{
        buyitem :(values)=>{
            dispatch(buyitem(values))
        }
    }
}
export default connect(mapstatetoprops,mapstatetodispatch)(Container) ;