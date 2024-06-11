const DaynamicPage = ({params, searchParams}) => {
    // console.log(searchParams);

    return (
        <div>
            <h1>This is daynamic page: {params.id}</h1>
            <h2>Search by: {searchParams.price}</h2>
        </div>
    );
};

export default DaynamicPage;