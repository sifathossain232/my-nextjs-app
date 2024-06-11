import Image from "next/image";
import nextImage from "@/assets/photo-sunset.avif";

const AlbumPage = () => {
    return (
        <div className="text-center mt-10">
            <h1 className="text-3xl">Using image component</h1>
            <div className="flex gap-5 justify-center mt-10">
                <Image className="rounded-lg" src="https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={500} height={500} alt="logo" />
                <Image className="rounded-lg" src={nextImage} width={500} height={500} alt="logo" />
            </div>
        </div>
    );
};

export default AlbumPage;