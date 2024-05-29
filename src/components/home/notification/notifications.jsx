import { BiSolidBellRing } from "react-icons/bi";
import Notification from "./notification";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getNotifications } from "../../../state/actions/notification-action";
import Loader from "../../global/loader";
import NotificationSkeleton from "./notif-skeleton";

const Notifications = () => {

    const dispatch = useDispatch();
    useEffect(() => {dispatch(getNotifications())}, []);
    const {notifications, loadingNotifications} = useSelector(state => state.notification);

    const renderNotification = () => notifications.map((notification,i)=><Notification notification={notification} key={i}/>)

    return(

        <div className="flex flex-col gap-1 overflow-auto flex-grow bg-primary rounded-2xl">
            <div className="card flex justify-between items-center">
                <h2 className="font-bold text-xl text-primaryColor">Notifications:</h2>
                <BiSolidBellRing className="text-lg text-primaryColor cursor-pointer"/>       
            </div>
            <div className="flex flex-col gap-1">
                <Loader loading={loadingNotifications} data={notifications.length} skeleton={<NotificationSkeleton/>} count={8}>
                    {renderNotification()}
                </Loader>
            </div>
        </div>
    )
}

export default Notifications;