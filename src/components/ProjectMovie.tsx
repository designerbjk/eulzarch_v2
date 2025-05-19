import { useState } from 'react';

interface Video {
  title: string;
  url: string;
}

const videos: Video[] = [
  {
    title: '강남구 세곡동 "다래가"',
    url: 'https://youtu.be/h-ovbFMWd5Q'
  },
  {
    title: '평창 금당마을 전원주택단지',
    url: 'https://youtu.be/WQaXeasbWM4'
  },
  {
    title: '평창 유경아트갤러리',
    url: 'https://youtu.be/6JgzFWobNg4'
  }
];

const ProjectMovie = () => {
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split('/').pop();
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row gap-4">
        <div className="md:w-3/4">
          <div className="h-[700px] bg-white rounded-lg overflow-hidden shadow-sm">
            <iframe
              src={getYouTubeEmbedUrl(currentVideo.url)}
              title={currentVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="md:w-1/4">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Project Videos</h2>
          <div className="space-y-2 bg-gray-50 p-3 rounded-lg">
            {videos.map((video) => (
              <button
                key={video.url}
                onClick={() => setCurrentVideo(video)}
                className={`w-full text-left p-4 rounded-lg transition-colors shadow-sm ${
                  currentVideo.url === video.url
                    ? 'bg-blue-600 text-white'
                    : 'bg-white hover:bg-gray-100'
                }`}
              >
                {video.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMovie;
