interface SimpleYouTubeVideosProps {
  className?: string;
}

export default function YouTubeVideosSimple({ className = '' }: SimpleYouTubeVideosProps) {
  // Real video IDs from Nair Entertainment channel
  const videoIds = [
    'mCXgzPP1sh8',
    'Ze4FNHIv8pQ', 
    'lHT7gVDDVHE',
    'iz7wXlVQjj8',
    'z25wCzCjoC0',
    'dKySWwfq1Ig',
    'jefLAGVStcY',
    'yOpSK8uIt0M',
    'cdAiTMhF3OE'
  ];

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {videoIds.map((videoId, index) => (
        <div key={videoId + index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div className="relative aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`Nair Entertainment Video ${index + 1}`}
              className="w-full h-full"
              frameBorder="0"
              allowFullScreen
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">Nair Entertainment Content</h3>
            <p className="text-gray-600 text-sm">Watch our latest performances and traditional entertainment</p>
          </div>
        </div>
      ))}
    </div>
  );
}