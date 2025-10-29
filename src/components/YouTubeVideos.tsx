import { useState, useEffect } from 'react';

interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
}

interface YouTubeVideosProps {
  channelId?: string;
  channelUsername?: string;
  maxResults?: number;
  className?: string;
}

const YOUTUBE_API_KEY = 'AIzaSyCk844XZzP6XyDNREeN6zXmpiQRD12rUwA';

export default function YouTubeVideos({ 
  channelId, 
  channelUsername, 
  maxResults = 6,
  className = '' 
}: YouTubeVideosProps) {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        setError(null);

        let finalChannelId = channelId;

        // If username provided, convert to channel ID
        if (channelUsername && !channelId) {
          // For @Nair.entertainment, the channel ID is UCDwwWlUMXeanTYfUpU-GVBg
          // You can find this by viewing the channel URL
          if (channelUsername === '@Nair.entertainment') {
            finalChannelId = 'UCDwwWlUMXeanTYfUpU-GVBg';
          } else {
            // Try to extract from different username formats
            const usernameClean = channelUsername.replace('@', '');
            try {
              const channelResponse = await fetch(
                `https://www.googleapis.com/youtube/data/v3/channels?key=${YOUTUBE_API_KEY}&forUsername=${usernameClean}&part=id`
              );
              const channelData = await channelResponse.json();
              
              if (channelData.items && channelData.items.length > 0) {
                finalChannelId = channelData.items[0].id;
              } else {
                throw new Error('Channel not found');
              }
            } catch (error) {
              throw new Error('Channel not found - please provide channel ID directly');
            }
          }
        }

        if (!finalChannelId) {
          throw new Error('Channel ID or username required');
        }

        // Fetch videos from the channel using CORS proxy
        const apiUrl = `https://www.googleapis.com/youtube/data/v3/search?key=${YOUTUBE_API_KEY}&channelId=${finalChannelId}&part=snippet&order=date&maxResults=${maxResults}&type=video`;
        const videosResponse = await fetch(
          `https://api.allorigins.win/get?url=${encodeURIComponent(apiUrl)}`
        );

        if (!videosResponse.ok) {
          throw new Error('Failed to fetch videos');
        }

        const proxyData = await videosResponse.json();
        const videosData = JSON.parse(proxyData.contents);
        
        const formattedVideos: YouTubeVideo[] = videosData.items.map((item: any) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnail: item.snippet.thumbnails.medium.url,
          publishedAt: item.snippet.publishedAt
        }));

        setVideos(formattedVideos);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load videos');
      } finally {
        setLoading(false);
      }
    };

    if (channelId || channelUsername) {
      fetchVideos();
    }
  }, [channelId, channelUsername, maxResults]);

  if (loading) {
    return (
      <div className={`flex justify-center items-center p-8 ${className}`}>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`text-center p-8 text-red-600 ${className}`}>
        <p>Error loading videos: {error}</p>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {videos.map((video) => (
        <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div className="relative aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              className="w-full h-full"
              frameBorder="0"
              allowFullScreen
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2 line-clamp-2">{video.title}</h3>
            <p className="text-gray-600 text-sm line-clamp-3">{video.description}</p>
            <p className="text-gray-400 text-xs mt-2">
              {new Date(video.publishedAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}