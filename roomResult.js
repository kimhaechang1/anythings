import React, {useEffect, useState} from 'react';
import homeData from "../home.json";
function RoomResult(input){
    const [data, setData] = useState([]);
    useEffect(()=>{
        if(input.name.length>1){
            const value = homeData;
            setData(value.filter((data)=>{
                return (data.name).includes(input.name)
            })) 
        }else{
            setData([]);
        }
    },[input])
    
    return(
        <div>
        {data.map((data, index)=>{
            return (<div key={index}>
                <p>이름 : {data.name}</p>
                <p>lat : {data.lat}</p>
                <p>lng : {data.lng}</p>
                <p>size : {data.size}</p>
                <p>address : {data.address}</p>
            </div>)
        })}
        </div>
    )
}


export default RoomResult;