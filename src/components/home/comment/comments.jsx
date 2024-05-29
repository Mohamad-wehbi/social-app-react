import Comment from "./comment";

const Comments = ({comments}) => {
    
    const renderComment = () => comments.map((comment,i)=><Comment comment={comment} key={i}/>)

    return(
        
            <>
                <div className="flex flex-col gap-1 max-h-[700px] min-h-[700px] overflow-auto">
                    {renderComment()}
                </div>
            </>
    )
}

export default Comments;