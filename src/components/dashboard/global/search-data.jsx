import { Input } from "@material-tailwind/react"

const SearchData = ({setSearch, header}) => {
    
    return(

        <div className="flex items-center justify-between">
            <h2 className="hidden md:block text-2xl font-extrabold text-primaryColor">{header}</h2>
            <form className="w-full md:w-[500px]">
                <Input onChange={(e)=>setSearch(e.target.value)} variant="outlined" label={"Search"} color="white" className="text-main"/>
            </form>
        </div>
    )
}

export default SearchData