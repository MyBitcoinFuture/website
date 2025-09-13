// Utility to fetch latest release download URLs from GitHub API
export const fetchLatestReleaseDownloads = async () => {
  try {
    const response = await fetch('https://api.github.com/repos/MyBitcoinFuture/dashboard/releases/latest');
    if (!response.ok) {
      throw new Error('Failed to fetch latest release');
    }
    
    const release = await response.json();
    const downloads = {
      linux: {
        deb: null,
        rpm: null,
        appimage: null
      },
      windows: {
        exe: null
      }
    };
    
    // Map assets to download types
    release.assets.forEach(asset => {
      const filename = asset.name.toLowerCase();
      
      if (filename.includes('.deb')) {
        downloads.linux.deb = {
          url: asset.browser_download_url,
          name: asset.name,
          size: asset.size
        };
      } else if (filename.includes('.rpm')) {
        downloads.linux.rpm = {
          url: asset.browser_download_url,
          name: asset.name,
          size: asset.size
        };
      } else if (filename.includes('.appimage')) {
        downloads.linux.appimage = {
          url: asset.browser_download_url,
          name: asset.name,
          size: asset.size
        };
      } else if (filename.includes('.exe')) {
        downloads.windows.exe = {
          url: asset.browser_download_url,
          name: asset.name,
          size: asset.size
        };
      }
    });
    
    return {
      release: {
        name: release.name,
        tag_name: release.tag_name,
        published_at: release.published_at,
        html_url: release.html_url
      },
      downloads
    };
  } catch (error) {
    console.error('Error fetching release downloads:', error);
    return null;
  }
};

export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};
