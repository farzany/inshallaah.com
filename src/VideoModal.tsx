import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';

export default function VideoModal() {
  const [showModal, setShowModal] = useState(false);
  const playerRef = useRef<ReactPlayer | null>(null);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(0, 'seconds');
    }
    setShowModal(false);
  };

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <button className="m-auto ml-4" onClick={openModal}>
        <img className="w-8 sm:w-9" src="images/audio.png" alt="" />
      </button>
      <div onClick={closeModal} className={`${showModal ? 'opacity-100' : 'invisible opacity-0'} fixed inset-0 z-10 flex items-center justify-center bg-black/60 transition-all duration-300`}>
        <div onClick={stopPropagation} className="relative w-[90%] sm:w-[400px]">
          <ReactPlayer
            className="overflow-hidden rounded-xl"
            url= "videos/inshallah_sui.mp4"
            height="100%"
            width="100%"
            ref={playerRef}
            onEnded={closeModal}
            playing={showModal}
          />
        </div>
      </div>
    </>
  );
}