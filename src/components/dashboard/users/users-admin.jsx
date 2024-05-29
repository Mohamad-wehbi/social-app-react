import UserAdmin from "./user-admin";
import { useSelector } from "react-redux";
import { useState } from "react";
import SearchData from "../global/search-data";
import Loader from "../../global/loader";
import AdminUserSkeleton from "./user-skeleton";
import UsersPagination from "./users-pagination";

const UsersAdmin = () => {

    const [search, setSearch] = useState("");
    const {mainUsers, profiles, loadingUsers} = useSelector(state => state.profile);
    
    const renderUsers = () => profiles.map((profile,i)=> <UserAdmin profile={profile} key={i} />)

    return(
        
        <div className="h-full flex flex-col justify-between">
            <div className="flex flex-col gap-6">
                <SearchData header="Users Table" setSearch={setSearch}/>
                <div className="flex flex-col gap-1">
                    <div className="flex rounded-lg text-primaryColor bg-main font-extrabold px-4 py-3">
                        <h3 className="md:w-2/6 w-4/6">Members</h3>
                        <h3 className="hidden md:block w-1/6">Company</h3>
                        <h3 className="hidden md:block w-1/6">Country</h3>
                        <h3 className="w-1/6">Profile</h3>
                        <h3 className="w-1/6">Delete</h3>
                    </div>
                <div className="flex flex-col gap-1">
                    <Loader loading={loadingUsers} data={mainUsers.length} skeleton={<AdminUserSkeleton/>} count={10}>
                        {renderUsers()}
                    </Loader>
                </div>
                </div>
            </div>
            <UsersPagination search={search}/>    
        </div>
    )
}

export default UsersAdmin