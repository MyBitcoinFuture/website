import VERSION from '../version.js';

const VersionIndicator = () => {
  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '10px',
        right: '10px',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: '#9ca3af',
        padding: '4px 8px',
        borderRadius: '4px',
        fontSize: '10px',
        fontFamily: 'monospace',
        zIndex: 1000,
        opacity: 0.7,
        pointerEvents: 'none'
      }}
    >
      v{VERSION.version} • {VERSION.commitHash.substring(0, 8)}
    </div>
  );
};

export default VersionIndicator;
