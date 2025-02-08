const Card = ({ data }) => {
    if (!data || data.length === 0) return <p className="text-white text-lg">Loading...</p>;

    const { gender, phone, picture, name } = data[0];

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#0f172a] p-10">
            <div className="relative w-[700px] h-[400px] bg-white/10 backdrop-blur-2xl border border-gray-800 
                rounded-3xl p-8 flex items-center shadow-[0px_0px_20px_rgba(255,255,255,0.1)] transition-all duration-500 
                hover:scale-105 hover:shadow-[0px_0px_40px_rgba(0,183,255,0.5)] hover:translate-y-2 hover:border-cyan-400">
                
                {/* Floating Neon Ring */}
                <div className="absolute -top-8 -left-8 w-20 h-20 bg-cyan-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>

                {/* Image Section */}
                <img src={picture.large} alt="Profile" 
                    className="w-44 h-44 border-4 border-gray-300 rounded-2xl shadow-lg hover:scale-110 transition-all duration-300" />

                {/* Info Section */}
                <div className="ml-10 text-white">
                    <h1 className="text-5xl font-extrabold tracking-wide">{name.first} {name.last}</h1>
                    <p className="text-xl text-gray-300 mt-2 capitalize">{gender}</p>
                    <p className="text-lg text-gray-400 mt-2">{phone}</p>

                    {/* Buttons */}
                    <div className="mt-6 flex gap-6">
                        <button className="px-7 py-3 text-lg bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl 
                            shadow-lg transition-all duration-300 hover:shadow-[0px_0px_20px_rgba(0,183,255,0.6)]">
                            Follow
                        </button>
                        <button className="px-7 py-3 text-lg bg-gray-700 hover:bg-gray-800 text-white rounded-xl 
                            shadow-lg transition-all duration-300 hover:shadow-[0px_0px_20px_rgba(255,255,255,0.3)]">
                            Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
