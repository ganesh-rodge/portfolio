import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface LoaderProps {
  onComplete: () => void
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 500) // Small delay before completion
          return 100
        }
        return prev + Math.random() * 15 + 5 // Random increment between 5-20
      })
    }, 150)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-white via-slate-50 to-neutral-100 dark:from-neutral-900 dark:via-neutral-900 dark:to-black"
    >
      {/* Background animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <motion.div
          animate={{ 
            x: [0, 100, -50, 150, 0],
            y: [0, -100, 50, -150, 0],
            scale: [1, 1.2, 0.8, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -150, 100, -100, 0],
            y: [0, 100, -50, 150, 0],
            scale: [1, 0.8, 1.2, 0.9, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-3xl"
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:50px_50px] opacity-20"></div>
      </div>

      {/* Main loader content */}
      <div className="relative z-10 text-center">
        {/* Animated logo/initial */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mb-8"
        >
          {/* Outer rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-24 h-24 mx-auto"
          >
            <div className="w-full h-full rounded-full border-2 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-border p-0.5">
              <div className="w-full h-full rounded-full bg-white dark:bg-neutral-900"></div>
            </div>
          </motion.div>
          
          {/* Center logo */}
          <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent"
            >
              GR
            </motion.div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-white mb-2"
        >
          Ganesh Rodge
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-neutral-600 dark:text-neutral-400 mb-8"
        >
          Software Developer
        </motion.p>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="w-64 mx-auto"
        >
          <div className="relative">
            {/* Progress bar background */}
            <div className="h-1 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
              {/* Progress fill */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full relative"
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
              </motion.div>
            </div>
            
            {/* Progress percentage */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="text-center mt-3 text-sm text-neutral-500 dark:text-neutral-400"
            >
              {Math.round(progress)}%
            </motion.div>
          </div>
        </motion.div>

        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-4"
        >
          <div className="flex items-center justify-center space-x-1">
            <span className="text-sm text-neutral-500 dark:text-neutral-400">Loading</span>
            <div className="flex space-x-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                  className="w-1 h-1 bg-neutral-400 dark:bg-neutral-500 rounded-full"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}