
const NavBanelCon = ({keys, children}) => {

    return (
        <div className={`${keys?"toggel-one":"toggel-two"} w-full lg:w-[50%] p-[5%] gap-6 flex flex-col justify-center items-center bg-main rounded-xl transition-all duration-1000`}>
            {children}
        </div>
    )
}

export default NavBanelCon;