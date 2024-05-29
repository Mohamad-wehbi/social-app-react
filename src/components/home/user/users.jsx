import {FaUserGroup} from "react-icons/fa6"
import User from "./user";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import UserSkeleton from "./user-skeleton";
import { getRandomUsers } from "../../../state/actions/profile-action";
import Loader from "../../global/loader";

const Users = () => {

    const dispatch = useDispatch();
    useEffect(() => {dispatch(getRandomUsers())}, []);
    const {randomUsers, loadingRandomUsers} = useSelector(state => state.profile);
    const {user} = useSelector(state => state.auth);
    

    const renderUsers = () => randomUsers.filter((profile)=> 
        profile.id != user.id).map((profile,i)=> <User profile={profile} key={i} />)

    return(

        <div className="flex flex-col gap-1 overflow-auto flex-grow bg-primary rounded-2xl mb-2">
            <div className="card flex justify-between items-center">
               <h2 className="font-bold text-xl text-primaryColor">Users you may know:</h2>
               <div className="text-lg text-primaryColor cursor-pointer">
                  <FaUserGroup/>
               </div>       
            </div>
            <div className="flex flex-col gap-1">
                <Loader loading={loadingRandomUsers} data={randomUsers.length} skeleton={<UserSkeleton/>} count={5}>
                    {renderUsers()}
                </Loader>
            </div>
        </div>

    )
}

export default Users;