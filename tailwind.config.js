const multipleLinesPlugin = require("tailwindcss-plugin-multiple-lines");

module.exports = {
  theme: {
    zIndex: {
      "-1": "-1"
    },
    extend: {}
  },
  variants: {},
  plugins: [multipleLinesPlugin()]
};
