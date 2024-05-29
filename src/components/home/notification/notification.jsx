import UserInfo from "../../global/user-info";
import DeleteNotification from "./delete-notification";

const Notification = ({notification}) => {

    return(

        <div className="card hover:opacity-80">
            <UserInfo image={notification.userImg} username={notification.username} userId={notification.userId} desc={notification.noticeAt}>
                <DeleteNotification notificationId={notification.id}/>
            </UserInfo>
            <p className="font-semibold text-secondryColor text-sm mt-1">{notification.message}</p>
        </div>
        
    )
}

export default Notification;