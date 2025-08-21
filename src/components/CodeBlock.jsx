import { useEffect, useRef, useState } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-json'
import 'prismjs/themes/prism-tomorrow.css'

const CodeBlock = ({ code, language = 'bash' }) => {
  const codeRef = useRef(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    // Add custom keywords for MyBitcoinFuture commands
    Prism.languages.bash = Prism.languages.extend('bash', {
      'command': {
        pattern: /\b(mbf-treasury|docker-compose|npm|git|curl|cd|cp|NODE_ENV)\b/,
        lookbehind: true
      },
      'keyword': {
        pattern: /\b(up|down|build|start|install|clone|add-wallet|list-wallets|portfolio|status|health|logs|setup)\b/,
        lookbehind: true
      },
      'string': {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: true
      },
      'comment': {
        pattern: /#.*$/m,
        greedy: true
      },
      'variable': {
        pattern: /\$\w+/,
        greedy: true
      },
      'number': {
        pattern: /\b\d+\b/,
        greedy: true
      }
    })

    if (codeRef.current) {
      Prism.highlightElement(codeRef.current)
    }
  }, [code, language])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <div className="rounded-lg border border-gray-600 overflow-hidden shadow-lg" style={{ backgroundColor: 'rgba(15, 23, 42, 0.85)' }}>
      <div className="flex items-center justify-end px-6 py-4 border-b border-gray-600" style={{ backgroundColor: 'rgba(30, 41, 59, 0.85)' }}>
        <button
          onClick={copyToClipboard}
          className="flex items-center justify-center w-10 h-10 rounded-md transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105"
          style={{ backgroundColor: '#000000' }}
          title="Copy to clipboard"
        >
          {copied ? (
            <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="#ffffff" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="#ffffff" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>
      </div>
      <pre className="p-6 m-0 overflow-x-auto" style={{ backgroundColor: 'rgba(15, 23, 42, 0.85)' }}>
        <code ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  )
}

export default CodeBlock
