module.exports = {
  // this mode makes prod and dev similar
  mode: "jit",
  important: true,
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    // safelist is useful for classes which are generated
    // dynamically at runtime
    safelist: [
      "bg-red-300",
      "bg-red-500",
      "bg-green-300",
      "bg-green-500",
      "bg-gray-300",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
