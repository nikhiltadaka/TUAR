import { useEffect, useState } from "react";
import Member from "./Member";

function Cards({members}){

    const [currPos,setCurPos] = useState(0);
    const [member,setmemeber] = useState(members[currPos]);

    useEffect(
        ()=>{
            setmemeber(members[currPos]);
        }
    ,[currPos]);

    let length = members.length;

    return(
        <Member currPos={currPos} setCurPos={setCurPos} length={length} setmemeber={setmemeber} member={member}></Member>
    );
}

export default Cards;