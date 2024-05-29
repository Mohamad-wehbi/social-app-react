import { Button } from "@material-tailwind/react";

const PaginationElement = ({pagination, prev, next}) => {

    const style = {opacity:0.3};

    return(
               
        <div className="flex justify-between items-end mt-6 text-primaryColor">
            <p className="font-semibold">{`Page ${pagination.page} of ${pagination.numberOfPages}`}</p>
            <div className="flex gap-3">
                <Button style={!pagination.prev?style:null} onClick={prev} className="text-md font-bold bg-main">PREVIOUS</Button>
                <Button style={!pagination.next?style:null} onClick={next} className="text-md font-bold bg-main">NEXT</Button>
            </div>
        </div>
    )
}

export default PaginationElement