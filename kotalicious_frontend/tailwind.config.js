/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      "maxWidth":{
        "primary": "1240px",
        "secondary": "900px",
        "third": "1080px"

      },
      "colors":{
        "primary": "#FDC600",
        "secondary": "#FF2B2B"
      },
      "fontFamily":{
        "roboto": ["Roboto", "sans"]
      },
      "backgroundImage": {
        "front": "url('src/assets/front-bg.jpg')",
        "front-big": "url('src/assets/front-big.jpg')",
        "hero": "url('src/assets/owner.jpg')"
      },
      "height": {
        "70v": "80vh"
      },
      "minHeight": {
        "70v": "75vh"
      }
    },
  },
  plugins: [],
}

