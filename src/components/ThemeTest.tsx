import { useTheme } from "../context/ThemeContext"

export default function ThemeTest() {
  const { toggleTheme, theme } = useTheme()
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-500">
      <h1 className="text-3xl mb-4">Current Theme: {theme}</h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded bg-yellow-500 text-black"
      >
        Toggle Theme
      </button>
    </div>
  )
}
