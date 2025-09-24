import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 group focus:outline-none"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Toggle Switch Container */}
      <div className={`relative w-16 h-8 rounded-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] transform hover:scale-105 ${
        theme === 'dark' 
          ? 'bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 shadow-lg shadow-blue-500/30' 
          : 'bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 shadow-lg shadow-orange-500/30'
      }`}>
        
        {/* Sliding Circle */}
        <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] transform ${
          theme === 'dark' ? 'translate-x-9' : 'translate-x-1'
        } flex items-center justify-center`}>
          
          {/* Sun Icon */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            theme === 'light' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 rotate-180 scale-0'
          }`}>
            <div className="relative">
              {/* Sun rays */}
              <div className="absolute inset-0">
                {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation, index) => (
                  <div
                    key={index}
                    className={`absolute bg-gradient-to-t from-amber-500 via-yellow-400 to-yellow-300 rounded-full shadow-sm transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]`}
                    style={{
                      width: '2px',
                      height: '6px',
                      top: '-3px',
                      left: '50%',
                      transform: `translateX(-50%) rotate(${rotation}deg) scale(${theme === 'light' ? 1 : 0.5})`,
                      transformOrigin: 'center 12px',
                      transitionDelay: `${index * 50}ms`
                    }}
                  />
                ))}
              </div>
              
              {/* Sun center */}
              <div className={`w-3.5 h-3.5 rounded-full bg-gradient-to-br from-yellow-300 via-amber-400 to-orange-500 shadow-lg transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] border border-yellow-200/50 ${
                theme === 'light' ? 'scale-100' : 'scale-75'
              }`}>
                <div className="w-full h-full rounded-full bg-gradient-to-tl from-yellow-100/70 via-transparent to-transparent"></div>
                {/* Sun surface highlights */}
                <div className="absolute top-0.5 left-0.5 w-1 h-1 rounded-full bg-yellow-100/80"></div>
                <div className="absolute top-1.5 right-0.5 w-0.5 h-0.5 rounded-full bg-yellow-200/60"></div>
              </div>
            </div>
          </div>

          {/* Moon Icon */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            theme === 'dark' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-180 scale-0'
          }`}>
            <div className="relative">
              {/* Stars around moon */}
              <div className="absolute inset-0">
                {[
                  { top: '-1px', right: '3px', delay: '0ms', color: 'bg-blue-200', size: 'w-1 h-1' },
                  { top: '10px', right: '-1px', delay: '200ms', color: 'bg-cyan-200', size: 'w-0.5 h-0.5' },
                  { bottom: '2px', left: '2px', delay: '400ms', color: 'bg-indigo-200', size: 'w-0.5 h-0.5' },
                  { top: '3px', left: '-1px', delay: '600ms', color: 'bg-blue-100', size: 'w-0.5 h-0.5' }
                ].map((star, index) => (
                  <div
                    key={index}
                    className={`absolute ${star.size} ${star.color} rounded-full shadow-sm transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      theme === 'dark' ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                    }`}
                    style={{
                      ...star,
                      transitionDelay: star.delay,
                      animation: theme === 'dark' ? `pulse 3s infinite ${star.delay}` : 'none'
                    }}
                  />
                ))}
              </div>
              
              {/* Moon crescent */}
              <div className={`relative w-3.5 h-3.5 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                theme === 'dark' ? 'scale-100' : 'scale-75'
              }`}>
                {/* Main moon body */}
                <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 shadow-lg border border-slate-200/40"></div>
                {/* Moon shadow to create crescent effect */}
                <div className="absolute top-0 right-0 w-2.5 h-3.5 rounded-full bg-gradient-to-bl from-slate-300/60 via-blue-200/40 to-indigo-200/30"></div>
                {/* Moon surface details (craters) */}
                <div className="absolute top-1 left-0.5 w-0.5 h-0.5 rounded-full bg-slate-300/60 shadow-sm"></div>
                <div className="absolute top-2 left-1 w-0.5 h-0.5 rounded-full bg-slate-400/50"></div>
                <div className="absolute bottom-1 left-0.5 w-1 h-0.5 rounded-full bg-slate-300/40"></div>
                {/* Moon highlight */}
                <div className="absolute top-0.5 left-0.5 w-1 h-1 rounded-full bg-white/50"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Icons in Track */}
        <div className="absolute inset-0 flex items-center justify-between px-2">
          {/* Sun background icon */}
          <div className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            theme === 'light' ? 'opacity-20 scale-90' : 'opacity-50 scale-100'
          }`}>
            <div className="w-4 h-4 relative">
              {[0, 90, 180, 270].map((rotation, index) => (
                <div
                  key={index}
                  className="absolute w-0.5 h-1.5 bg-white rounded-full transition-all duration-500"
                  style={{
                    top: '5px',
                    left: '50%',
                    transform: `translateX(-50%) rotate(${rotation}deg)`,
                    transformOrigin: 'center 3px',
                    transitionDelay: `${index * 40}ms`
                  }}
                />
              ))}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full shadow-sm"></div>
            </div>
          </div>
          
          {/* Moon background icon */}
          <div className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            theme === 'dark' ? 'opacity-20 scale-90' : 'opacity-50 scale-100'
          }`}>
            <div className="relative w-4 h-4">
              <div className="w-4 h-4 rounded-full bg-white shadow-sm"></div>
              <div className="absolute top-0.5 right-0.5 w-2.5 h-3 rounded-full bg-gradient-to-bl from-gray-300/80 to-gray-400/60"></div>
              {/* Small craters */}
              <div className="absolute top-1.5 left-1 w-0.5 h-0.5 bg-gray-400/60 rounded-full"></div>
              <div className="absolute top-2.5 left-1.5 w-0.5 h-0.5 bg-gray-300/50 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Outer glow effect */}
      <div className={`absolute inset-0 rounded-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] opacity-0 group-hover:opacity-100 blur-xl ${
        theme === 'dark' 
          ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20' 
          : 'bg-gradient-to-r from-orange-400/20 to-pink-500/20'
      }`}></div>
    </button>
  )
}