module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        lazyLoading: {
          "0%, 100%": {
            transform: "scale(0)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        slideBottomToTop: {
          "0%, 100%": {
            transform: "translateY(100%)",
          },
          "100%": {
            transform: "none",
          },
        },
        slideBottomToTopNavbar: {
          "0%, 100%": {
            transform: "translateY(20%)",
          },
          "100%": {
            transform: "none",
          },
        },
        slideRightToLeft: {
          "0%, 100%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "none",
          },
        },
        rotate: {
          "0%, 100%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "none",
          },
        },
      },
      animation: {
        lazyLoading: "lazyLoading",
        slideBottomToTop: "slideBottomToTop",
        slideRightToLeft: "slideRightToLeft",
        rotate: "rotate"
      },
    },
  },
  plugins: [],
};
