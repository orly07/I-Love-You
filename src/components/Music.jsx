// src/components/Music.jsx
import { useState, useEffect, useRef } from "react";
import { ArrowLeft } from "./icons";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import config from "./config";
import useMusicPlayer from "./MusicPlayer";

const imageFiles = import.meta.glob("../assets/music/*.png");

function Music() {
  const navigate = useNavigate();
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);

  // Initialize music player with new state
  const { currentSongIndex, isPlaying, togglePlay } = useMusicPlayer({
    songs,
    onSongEnd: () => {
      // Update UI when song ends
    },
  });

  useEffect(() => {
    const loadImages = async () => {
      setIsLoading(true);

      try {
        const loadedImages = await Promise.all(
          config.musicGallery.map(async (song, index) => {
            const imagePath = `../assets/music/${index + 1}.png`;
            if (imageFiles[imagePath]) {
              const imageModule = await imageFiles[imagePath]();
              return {
                ...song,
                albumCover: imageModule.default,
              };
            }
            return null;
          })
        );

        setSongs(loadedImages.filter((song) => song !== null));
      } catch (error) {
        console.error("Error loading images:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black/20 flex items-center justify-center">
        <p className="text-white">Loading music...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-[400px]">
        <h1 className="text-2xl font-bold mb-4 drop-shadow-lg text-white text-center">
          {config.musicTitle}
        </h1>

        <div
          ref={containerRef}
          className="relative w-full h-[40rem] rounded-lg overflow-hidden mb-8"
        >
          {songs.map((song, index) => (
            <motion.div
              key={index}
              className="absolute cursor-pointer"
              style={{
                left: song.left,
                top: song.top,
              }}
              drag
              dragConstraints={containerRef}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className={`bg-white/10 backdrop-blur-lg rounded-xl p-4 flex items-center gap-4 w-56 h-[4rem] 
                          transition-all duration-300
                          ${
                            currentSongIndex === index
                              ? "ring-2 ring-green-500 scale-[1.03]"
                              : "hover:bg-white/20"
                          }`}
                onClick={() => togglePlay(index)}
              >
                <div className="w-12 h-12 flex-shrink-0">
                  <img
                    src={song.albumCover}
                    alt="Album cover"
                    className="w-full h-full rounded-md object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-white font-medium text-sm truncate">
                    {song.title}
                  </h2>
                  <p className="text-white/70 text-xs truncate">
                    {song.artist}
                  </p>
                </div>
                <div className="ml-2">
                  {currentSongIndex === index ? (
                    isPlaying ? (
                      // Pause icon (two vertical bars)
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-green-500"
                      >
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                      </svg>
                    ) : (
                      // Play icon (right arrow)
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-green-500"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )
                  ) : (
                    // Default music note icon
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-white/50"
                    >
                      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                    </svg>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Button */}
        <div className="flex justify-center w-full mb-4">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg transition-colors"
            onClick={() => navigate(config.recapRedirectPath)}
          >
            <ArrowLeft /> {config.previousPageText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Music;
