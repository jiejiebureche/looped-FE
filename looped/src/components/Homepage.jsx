import React from "react";

const SectionSeparator = () => (
    <hr
        style={{
            border: "none",
            height: "1px",
            backgroundColor: "#530B73",
            margin: "2rem 0"
        }}
    />
);

const Homepage = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 pt-24 pb-8 text-white">
            {/* New Album Releases */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#530B73" }}>
                    New Album Releases
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="bg-black p-4 rounded-lg shadow hover:shadow-lg transition"
                        >
                            <div className="h-40 bg-white rounded mb-2"></div>
                            <p className="text-sm font-medium">Album Title</p>
                            <p className="text-xs text-gray-400">Artist Name</p>
                        </div>
                    ))}
                </div>
            </section>
            <SectionSeparator />

            {/* Popular Releases */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#530B73" }}>
                    Popular Releases
                </h2>
                <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
                    {[...Array(10)].map((_, i) => (
                        <div
                            key={i}
                            className="min-w-[160px] bg-black p-4 rounded-lg shadow hover:shadow-lg transition"
                        >
                            <div className="h-40 bg-white rounded mb-2"></div>
                            <p className="text-sm font-medium">Album Title</p>
                            <p className="text-xs text-gray-400">Artist Name</p>
                        </div>
                    ))}
                </div>
            </section>
            <SectionSeparator />

            {/* Popular Reviews */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#530B73" }}>
                    Popular Reviews
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className="bg-black p-4 rounded-lg shadow hover:shadow-lg transition"
                        >
                            <p className="text-sm italic mb-2">
                                “This album changed my life...”
                            </p>
                            <p className="text-xs text-gray-400">– Username</p>
                        </div>
                    ))}
                </div>
            </section>
            <SectionSeparator />

            {/* Popular Playlists */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#530B73" }}>
                    Popular Playlists
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="bg-black p-4 rounded-lg shadow hover:shadow-lg transition"
                        >
                            <div className="h-24 bg-white rounded mb-2"></div>
                            <p className="text-sm font-medium">Playlist Title</p>
                            <p className="text-xs text-gray-400">By Username</p>
                        </div>
                    ))}
                </div>
            </section>
            <SectionSeparator />

            {/* Friend's Activities */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#530B73" }}>
                    Friend’s Activities
                </h2>
                <div className="space-y-4">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="bg-black p-4 rounded-lg">
                            <p className="text-sm">
                                <span className="font-medium">FriendName</span> reviewed{" "}
                                <span className="italic">Album Name</span>
                            </p>
                            <p className="text-xs text-gray-400">2 hours ago</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Homepage;
