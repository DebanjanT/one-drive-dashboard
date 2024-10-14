/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#f6f7fe",
        onBackground: "#0c0c0c",
        surface: "#ffffff", // Tailwind uses full hex codes
        onSurface: "#0c0c0c",
        primary: "#1123cc",
        primaryLight: "#2737c9",
        primaryDark: "#0f1a7d",
        onPrimary: "#ffffff",
        secondary: "#e4e7fc",
        secondaryLight: "#f0f1fd",
        secondaryDark: "#c6ccf9",
        onSecondary: "#0c0c0c",
        warning: "#ee9004",
        onWarning: "#ffffff",
        error: "#f44336",
        onError: "#ffffff",
        success: "#4caf50",
        onSuccess: "#ffffff",
        info: "#2196f3",
        onInfo: "#ffffff",
        dropdownItemHover: "#f0f2f5",
        inputDisabled: "#f3f3f3",
        inputBorder: "#cccccc",
      },
      boxShadow: {
        inputOuterShadow: "0 0 0 3px rgba(0, 123, 255, 0.25)",
      },
      height: {
        dropdownHeight: "150px",
      },
    },
  },
  plugins: [],
};
