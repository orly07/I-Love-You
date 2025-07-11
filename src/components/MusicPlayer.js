// src/components/MusicPlayer.js
import { useState, useEffect, useRef } from "react";

export default function useMusicPlayer({ songs, onSongEnd }) {
  const audioRef = useRef(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = (index) => {
    // If clicking the same song that's playing
    if (currentSongIndex === index) {
      if (isPlaying) {
        // Pause current audio
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        // Resume playback
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch((error) => console.error("Audio play failed:", error));
      }
      return;
    }

    // If clicking a different song
    playSong(index);
  };

  const playSong = (index) => {
    // Stop if invalid index
    if (index < 0 || index >= songs.length) return;

    // Create new audio element if needed
    if (
      !audioRef.current ||
      audioRef.current.src !== `/music/${songs[index].audioFile}`
    ) {
      // Stop current audio if playing
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.onended = null; // Remove previous event handler
      }

      // Create new audio element
      audioRef.current = new Audio(`/music/${songs[index].audioFile}`);

      // Setup ended event
      audioRef.current.onended = () => {
        const nextIndex = (index + 1) % songs.length;
        playSong(nextIndex);
        onSongEnd(nextIndex);
      };
    }

    // Play the audio
    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
        setCurrentSongIndex(index);
      })
      .catch((error) => console.error("Audio play failed:", error));
  };

  return {
    currentSongIndex,
    isPlaying,
    togglePlay,
  };
}
