# Website Release System

## Overview

The MyBitcoinFuture website includes an automated release announcement and download system that integrates with GitHub releases to provide users with up-to-date information about new versions and easy access to downloads.

## Components

### 1. Releases Page (`/releases`)
- **Location**: `src/components/Releases.jsx`
- **Purpose**: Dedicated page for viewing all releases and downloading assets
- **Features**:
  - Fetches releases from GitHub API
  - Displays release notes and changelog
  - Platform-specific download links
  - File size and download count information
  - Release type badges (Release, Pre-release, Draft)

### 2. Release Announcements Component
- **Location**: `src/components/ReleaseAnnouncements.jsx`
- **Purpose**: Displays recent release announcements on the homepage
- **Features**:
  - Highlights latest release
  - Parses changelog into categorized sections
  - Shows feature additions, bug fixes, improvements, and security updates
  - Links to full release information

### 3. Version Tracking
- **Location**: `src/version.js`
- **Purpose**: Tracks current version and release information
- **Updated**: Automatically via CI/CD when new releases are created

## Integration Flow

### Dashboard Release → Website Update

1. **Dashboard Release Created**:
   - GitHub release is created in `dashboard` repository
   - Release workflow triggers website update

2. **Website Update Triggered**:
   - Repository dispatch event sent to `website` repository
   - Website CI/CD workflow runs

3. **Version Information Updated**:
   - `scripts/update-version.js` updates version information
   - Changes committed and pushed

4. **Website Deployed**:
   - Updated website deployed to GitHub Pages
   - New release information available to users

## API Integration

### GitHub Releases API
- **Endpoint**: `https://api.github.com/repos/MyBitcoinFuture/dashboard/releases`
- **Rate Limit**: 60 requests/hour for unauthenticated requests
- **Data Retrieved**:
  - Release name and tag
  - Release notes and body
  - Download assets and metadata
  - Release date and status

### Changelog Parsing
The system automatically parses release notes to categorize changes:

```javascript
const changelog = parseChangelog(release.body);
// Returns:
{
  features: ['New wallet management features', 'Enhanced security'],
  fixes: ['Fixed transaction sync issue', 'Resolved UI bug'],
  improvements: ['Performance optimization', 'Better error handling'],
  security: ['Security patch for authentication']
}
```

## User Experience

### Homepage Integration
- Release announcements appear prominently on homepage
- Latest release highlighted with special styling
- Quick access to download latest version
- Categorized changelog for easy scanning

### Dedicated Releases Page
- Complete release history
- Platform-specific download options
- Detailed release notes
- File size and download statistics
- Direct links to GitHub releases

### Navigation
- "Releases" link added to main navigation
- Accessible from any page on the website
- Consistent with existing design patterns

## Technical Implementation

### React Components
- **State Management**: Uses React hooks for data fetching and UI state
- **Error Handling**: Graceful fallbacks for API failures
- **Loading States**: Spinner and skeleton loading for better UX
- **Responsive Design**: Mobile-friendly layout and interactions

### Styling
- **Consistent Theme**: Matches existing website design
- **Platform Icons**: Visual indicators for different operating systems
- **Interactive Elements**: Hover effects and transitions
- **Accessibility**: Proper ARIA labels and keyboard navigation

### Performance
- **Caching**: GitHub API responses cached in component state
- **Lazy Loading**: Release details loaded on demand
- **Optimized Images**: Platform icons optimized for web
- **Minimal Dependencies**: Uses existing icon library

## Configuration

### Environment Variables
```bash
# Optional: GitHub API token for higher rate limits
VITE_GITHUB_TOKEN=your_github_token
```

### Customization
- **Release Count**: Modify `per_page` parameter in API calls
- **Changelog Categories**: Update parsing logic in `parseChangelog`
- **Styling**: Customize CSS classes and Tailwind utilities
- **Platform Detection**: Add new platform icons and detection logic

## Maintenance

### Regular Tasks
1. **Monitor API Usage**: Check GitHub API rate limits
2. **Update Dependencies**: Keep React and icon libraries current
3. **Test Integration**: Verify release workflow triggers correctly
4. **Review Performance**: Monitor page load times and user experience

### Troubleshooting
- **API Failures**: Check GitHub API status and rate limits
- **Build Failures**: Verify Node.js version and dependencies
- **Deployment Issues**: Check GitHub Pages settings and CNAME configuration
- **Styling Issues**: Validate CSS and Tailwind configuration

## Future Enhancements

### Planned Features
- **Release Notifications**: Email or browser notifications for new releases
- **Download Analytics**: Track download patterns and user preferences
- **Release Comparison**: Side-by-side comparison of release changes
- **Automated Testing**: Integration tests for release workflow
- **Multi-Repository Support**: Support for plugin releases and other repositories

### Potential Improvements
- **Progressive Web App**: Offline support for release information
- **Internationalization**: Multi-language support for release notes
- **Advanced Filtering**: Filter releases by version, date, or type
- **Release Calendar**: Visual timeline of releases
- **Community Feedback**: User comments and ratings for releases 