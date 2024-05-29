
const Loader = ({loading, skeleton, count, data, children}) => {

    const Skeleton = () => skeleton;
    const renderSkeleton = () => [...Array(count)].map((e,i)=> <Skeleton key={i}/>)

    return(
        <>
            { !data && loading ? renderSkeleton() : children }
        </>

    )
}

export default Loader;