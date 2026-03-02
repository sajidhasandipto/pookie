const API_KEY = import.meta.env.VITE_API_KEY;

async function getHomepageData() {
  const videoUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&maxResults=40&key=${API_KEY}`;

  try {
    const videoRes = await fetch(videoUrl);
    const videoData = await videoRes.json();
    
    if (!videoData.items) return [];

    const channelIds = videoData.items.map(item => item.snippet.channelId).join(',');
    const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelIds}&key=${API_KEY}`;
    
    const channelRes = await fetch(channelUrl);
    const channelData = await channelRes.json();

    const channelMap = {};
    if (channelData.items) {
      channelData.items.forEach(channel => {
        channelMap[channel.id] = channel.snippet.thumbnails.default.url;
      });
    }

    const completeVideos = videoData.items.map(video => {
      return {
        title: video.snippet.title,
        thumbnailUrl: video.snippet.thumbnails.medium?.url || video.snippet.thumbnails.default?.url,
        channelName: video.snippet.channelTitle,
        channelUrl: `https://www.youtube.com/channel/${video.snippet.channelId}`,
        channelAvatar: channelMap[video.snippet.channelId] || '',
        views: formatViews(video.statistics.viewCount),
        postedAt: formatRelativeTime(video.snippet.publishedAt),
        duration: parseDuration(video.contentDetails.duration),
        videoLink: `https://www.youtube.com/watch?v=${video.id}`
      };
    });

    return completeVideos;
  } catch (error) {
    console.error(error);
    return [];
  }
}

function parseDuration(duration) {
  if (duration === 'P0D') return 'LIVE';
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return '0:00';
  
  const h = parseInt(match[1]) || 0;
  const m = parseInt(match[2]) || 0;
  const s = parseInt(match[3]) || 0;

  if (h > 0) return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function formatViews(views) {
  const num = Number(views);
  if (isNaN(num)) return '0 views';
  if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M views';
  if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K views';
  return num + ' views';
}

function formatRelativeTime(dateString) {
  const diff = Math.floor((new Date() - new Date(dateString)) / 1000);
  if (diff < 60) return 'Just now';
  if (diff < 3600) return Math.floor(diff / 60) + ' minutes ago';
  if (diff < 86400) return Math.floor(diff / 3600) + ' hours ago';
  if (diff < 2592000) return Math.floor(diff / 86400) + ' days ago';
  if (diff < 31536000) return Math.floor(diff / 2592000) + ' months ago';
  return Math.floor(diff / 31536000) + ' years ago';
}

export default getHomepageData;