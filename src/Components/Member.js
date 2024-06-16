import {AiOutlineLeft,AiOutlineRight} from "react-icons/ai";

function Member({currPos,setCurPos,length,setmember,member}){

    function leftSliderHandler(){
        let id = currPos;
        if(id === 0){
            id = length-1;
        }
        else{
            id = id-1;
        }
        setCurPos(id); 
    }

    function rightSliderHandler(){
        let id = currPos;
        id = (id+1)%length;
        setCurPos(id);
    }

    return(
        <div className=" flex flex-col items-center relative gap-4 p-8 shadow-md md:min-w-[300px] lg:min-w-[600px] m-auto hover:shadow-2xl bg-white">
            <div className="">
                <img className="rounded-full" alt="team_Member_Image" src={member.image}
                    width="90px"
                ></img>
            </div>
            <div className="flex flex-col items-center">
                <div className="font-bold text-xl text-center">{member.name}</div>
            </div>
            <div className="flex flex-col items-center gap-3">
                <div className="flex felx-row gap-2">
                    <button onClick={leftSliderHandler}>
                        <AiOutlineLeft className="text-violet-400 hover:text-violet-600"/>
                    </button>
                    <button onClick={rightSliderHandler}>
                        <AiOutlineRight className="text-violet-400 hover:text-violet-600"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Member;