import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from "../context/ThemeContext";
export default function ThemeTest() {
    const { toggleTheme, theme } = useTheme();
    return (_jsxs("div", { className: "h-screen flex flex-col justify-center items-center bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-500", children: [_jsxs("h1", { className: "text-3xl mb-4", children: ["Current Theme: ", theme] }), _jsx("button", { onClick: toggleTheme, className: "px-4 py-2 rounded bg-yellow-500 text-black", children: "Toggle Theme" })] }));
}
