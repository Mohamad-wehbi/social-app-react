import { LuUsers } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUsersCount } from "../../../state/actions/profile-action";
import Shape from "../global/shape";

const UsersCount = () => {

    const dispatch = useDispatch();
    useEffect(()=>{dispatch(getUsersCount())})
    const {usersCount} = useSelector(state=> state.profile)

    return(
                        
      <Shape count={usersCount} desc={"Users"} >
            <LuUsers/>
      </Shape>
                
    )
}

export default UsersCount;