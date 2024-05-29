const AuthCon = ({children, keys}) =>{
    
    return(
        <div className={`${!keys?"lg:translate-x-0":"lg:translate-x-full"} w-full lg:w-[50%] flex flex-col justify-center items-center gap-5 py-[8%] px-[6%] transition-all duration-1000`}>
            {children}
        </div>
    )
}

export default AuthCon;