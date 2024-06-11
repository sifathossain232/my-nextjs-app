import Link from "next/link";

const NewsPage = () => {
    return (
        <div className="text-center mt-10">
            <h1 className="text-3xl mb-5">Yes this is news page!</h1>
            <Link href="/album" className="py-2 px-5 bg-pink-500 text-white rounded-lg"> <button>Album</button> </Link>
        </div>
    );
};

export default NewsPage;