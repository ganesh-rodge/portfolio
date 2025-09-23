import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
function AppRoot() {
    return (_jsx(StrictMode, { children: _jsx(ThemeProvider, { children: _jsx(App, {}) }) }));
}
createRoot(document.getElementById('root')).render(_jsx(AppRoot, {}));
