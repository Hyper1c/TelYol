'use client';

import React, { useState, useEffect, useRef } from 'react';

function EnVivoPage() {
  const [liveStreamUrl, setLiveStreamUrl] = useState('');
  const [streamTitle, setStreamTitle] = useState('🔴 No Estamos En Vivo');
  const facebookEmbedContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedUrl = localStorage.getItem('liveStreamUrl');
    const storedTitle = localStorage.getItem('streamTitle');
    setLiveStreamUrl(storedUrl || '');
    setStreamTitle(storedTitle || '🔴 No Estamos En Vivo');
  }, []);

  useEffect(() => {
    if (liveStreamUrl.includes('facebook.com') && facebookEmbedContainer.current) {
      facebookEmbedContainer.current.innerHTML = '';

      let videoId: string | null = null;
      const shareMatch = liveStreamUrl.match(/share\/v\/(\d+)/);
      const videosMatch = liveStreamUrl.match(/videos\/(\d+)/);

      if (shareMatch && shareMatch[1]) {
        videoId = shareMatch[1];
      } else if (videosMatch && videosMatch[1]) {
        videoId = videosMatch[1].split('?')[0];
      }

      if (videoId) {
        const embedCode = `
          <div class="fb-video" data-href="https://www.facebook.com/facebook/videos/${videoId}/" data-show-text="false" style="width: 100%; height: 100%;">
            <blockquote cite="https://www.facebook.com/facebook/videos/${videoId}/" class="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/facebook/videos/${videoId}/"></a>
            </blockquote>
          </div>
        `;
        facebookEmbedContainer.current.innerHTML = embedCode;

        if (typeof window.FB === 'undefined') {
          const script = document.createElement('script');
          script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0';
          script.async = true;
          script.defer = true;
          script.onload = () => {
            if (window.FB) {
              window.FB.XFBML.parse(facebookEmbedContainer.current!);
            }
          };
          document.body.appendChild(script);
        } else {
          window.FB.XFBML.parse(facebookEmbedContainer.current);
        }
      } else {
        facebookEmbedContainer.current.innerHTML = '<p>URL de Facebook no válida.</p>';
      }
    }
  }, [liveStreamUrl]);

  const isYouTubeUrl = liveStreamUrl.includes('youtube.com') || liveStreamUrl.includes('youtu.be');
  const isFacebookUrl = liveStreamUrl.includes('facebook.com');

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-8"
      style={{
        background: 'radial-gradient(circle, rgba(63,94,251,0.7) 0%, rgba(252,70,107,0.7) 100%)',
      }}
    >
      <h1 className="text-3xl md:text-5xl text-white font-bold mb-6 text-center">{streamTitle}</h1>

      {/* Marco del video responsivo con relación 16:9 */}
      <div className="relative w-full max-w-4xl aspect-video bg-gray-800 border-2 border-blue-500 rounded-lg shadow-lg overflow-hidden">
        {isYouTubeUrl ? (
          <iframe
            src={liveStreamUrl}
            title={streamTitle}
            className="w-full h-full"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        ) : isFacebookUrl ? (
          <div ref={facebookEmbedContainer} className="w-full h-full" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80">
            <p className="text-white text-lg text-center">
              La transmisión en vivo no está disponible en este momento.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default EnVivoPage;
