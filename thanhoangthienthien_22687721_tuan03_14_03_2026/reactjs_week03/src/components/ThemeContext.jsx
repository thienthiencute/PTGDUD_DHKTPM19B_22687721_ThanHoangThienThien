import React, { createContext, useState, useEffect } from 'react';

// Tạo context để lưu trữ theme
export const ThemeContext = createContext();

// ThemeProvider để bao bọc các component cần dùng theme
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // Lấy theme từ localStorage nếu có
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  // Lưu theme vào localStorage khi theme thay đổi
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Hàm thay đổi theme
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};