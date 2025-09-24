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
      <div className={`relative w-16 h-8 rounded-full transition-all duration-500 ease-in-out transform hover:scale-105 ${
        theme === 'dark' 
          ? 'bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 shadow-lg shadow-blue-500/30' 
          : 'bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 shadow-lg shadow-orange-500/30'
      }`}>
        
        {/* Sliding Circle */}
        <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-xl transition-all duration-500 ease-in-out transform ${
          theme === 'dark' ? 'translate-x-9' : 'translate-x-1'
        } flex items-center justify-center`}>
          
          {/* Sun Icon */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
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
                    className="absolute w-0.5 h-1.5 bg-gradient-to-t from-orange-500 to-yellow-400 rounded-full"
                    style={{
                      top: '-2px',
                      left: '50%',
                      transform: `translateX(-50%) rotate(${rotation}deg)`,
                      transformOrigin: 'center 8px',
                    }}
                  />
                ))}
              </div>
              
              {/* Sun center */}
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 shadow-sm">
                <div className="w-full h-full rounded-full bg-gradient-to-tl from-yellow-200/60 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Moon Icon */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
            theme === 'dark' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-180 scale-0'
          }`}>
            <div className="relative">
              {/* Stars around moon */}
              <div className="absolute inset-0">
                <div className="absolute w-0.5 h-0.5 bg-cyan-300 rounded-full top-0 right-1 animate-pulse" style={{ animationDelay: '0s' }}></div>
                <div className="absolute w-0.5 h-0.5 bg-blue-300 rounded-full top-2 right-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute w-0.5 h-0.5 bg-indigo-300 rounded-full bottom-0 left-1 animate-pulse" style={{ animationDelay: '2s' }}></div>
              </div>
              
              {/* Moon crescent */}
              <div className="relative w-3 h-3">
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-slate-200 via-blue-100 to-indigo-200"></div>
                <div className="absolute top-0.5 right-0.5 w-2 h-2 rounded-full bg-gradient-to-bl from-slate-300/80 to-blue-200/60"></div>
                {/* Moon surface details */}
                <div className="absolute top-1 left-0.5 w-0.5 h-0.5 rounded-full bg-slate-400/40"></div>
                <div className="absolute top-2 left-1 w-0.5 h-0.5 rounded-full bg-slate-400/30"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Icons in Track */}
        <div className="absolute inset-0 flex items-center justify-between px-2">
          {/* Sun background icon */}
          <div className={`transition-opacity duration-300 ${theme === 'light' ? 'opacity-30' : 'opacity-60'}`}>
            <div className="w-4 h-4 relative">
              {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation, index) => (
                <div
                  key={index}
                  className="absolute w-0.5 h-1 bg-white/70 rounded-full"
                  style={{
                    top: '6px',
                    left: '50%',
                    transform: `translateX(-50%) rotate(${rotation}deg)`,
                    transformOrigin: 'center 2px',
                  }}
                />
              ))}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white/70 rounded-full"></div>
            </div>
          </div>
          
          {/* Moon background icon */}
          <div className={`transition-opacity duration-300 ${theme === 'dark' ? 'opacity-30' : 'opacity-60'}`}>
            <div className="relative w-4 h-4">
              <div className="w-4 h-4 rounded-full bg-white/70"></div>
              <div className="absolute top-0.5 right-1 w-2.5 h-2.5 rounded-full bg-gradient-to-bl from-blue-400/50 to-cyan-400/30"></div>
              <div className="absolute top-1 right-2 w-0.5 h-0.5 bg-white/90 rounded-full"></div>
              <div className="absolute top-0.5 right-0.5 w-0.5 h-0.5 bg-white/80 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Outer glow effect */}
      <div className={`absolute inset-0 rounded-full transition-all duration-500 opacity-0 group-hover:opacity-100 blur-xl ${
        theme === 'dark' 
          ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20' 
          : 'bg-gradient-to-r from-orange-400/20 to-pink-500/20'
      }`}></div>
    </button>
  )
}