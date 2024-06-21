const { gray, blue, red, green, yellow, mauve, violet, blackA, whiteA, skyDark } = require('@radix-ui/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 1px 3px 0 rgba(0,0,0,.2),0 2px 1px -1px rgba(0,0,0,.12),0 1px 1px 0 rgba(0,0,0,.14)',
        '4xl': '5px 5px 12px #12161a,-5px -5px 12px #28303a'
      },
      colors: {
        ...gray,
        ...blue,
        ...red,
        ...green,
        ...yellow,
        ...mauve,
        ...violet,
        ...blackA,
        ...whiteA,
        ...skyDark
      },
      keyframes: {
        overlayShow: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        contentShow: {
          from: { opacity: '0', transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

