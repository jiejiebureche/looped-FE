import React from "react";

const VinylAlbum = ({
    coverUrl = "https://m.media-amazon.com/images/I/81eisJc3SnL.jpg",
    title = "Album Title",
    artist = "Artist Name",
}) => {
    return (
        <div className="relative group w-full aspect-square rounded-lg overflow-hidden bg-black hover:bg-gray-800 transition-colors duration-300">
            {/* Album Cover (Square) */}
            <img
                src={coverUrl}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Vinyl (Circular with spinning effect) */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2/3 aspect-square rounded-full overflow-hidden relative">
                    {/* Vinyl Image */}
                    <img
                        src={coverUrl}
                        alt="vinyl"
                        className="w-full h-full object-cover rounded-full border-4 border-white/80 shadow-lg transform transition-transform duration-700 ease-in-out group-hover:rotate-[720deg]"
                    />
                    {/* Vinyl Center Hole */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-4 h-4 bg-gray-300 rounded-full z-10 shadow-inner" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VinylAlbum;
