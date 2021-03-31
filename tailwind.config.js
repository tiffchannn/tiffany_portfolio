module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'], // removes unused styles in production
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      nude: {
        100: '#F6EEE1', // lightnude
        200: '#e9cbb1', // nude
        300: '#D3A26E',
        400: '#e6b386', // contact info text
        500: '#874A08'
      },
      // 'nude': '#e9cbb1',
      // 'lightnude': '#F6EEE1',
      // 'github_link': '#fab171',
      // 'contact_info_text': '#e6b386',
      white: '#fff'
    },
    // backgroundColor: theme => ({
    //   'nude': '#e9cbb1',
    //   'lightnude': '#F6EEE1'
    // }),
    fontFamily: {
      'default': ['Garamond', 'Georgia', 'sans-serif']
    }
  },
  variants: {
    extend: {
      padding: ['hover'],
    }
  },
  plugins: [],
}
