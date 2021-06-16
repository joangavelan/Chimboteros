module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      neue: ['Neue Haas Display', 'sans-serif'],
    },
    colors: {
      blue: {
        100: '#0040BE',
        200: '#0196FD',
        300: '#193F8A'
      },
      pink: '#FF0066',
      green: '#34CC67',
      gold: {
        100: '#E9B047',
        200: '#CD9631'
      },
      yellow: '#F0FD34',
      aqua: '#2CE0E1',
      dark: {
        100: '#1A1A1A',
        200: '#333333',
        300: '#2B2A28',
        400: '#626971',
        500: '#BBBBBB'
      },
      white: '#fff',
      black: '#000',
      gray: '#C7CCD0'
    },
    extend: {
      backgroundImage: theme => ({
        'header': "url('/img/mobile/Chicas en playa Chimbote.jpg')",
        'pescadores': "url('/img/mobile/Pescadores de sueños.jpg')",
        'fotear': "url('/img/mobile/Travesía en el mar.jpg')",
        'gustar': "url('/img/mobile/Causa Ancashina.jpg')",
        'viva': "url('/img/mobile/Lanchas pesqueras Chimbote.jpg')",
        'aldea': "url('/img/mobile/Aldea.jpg')",
        'lindo': "url('/img/mobile/Arte Popular.jpg')",
        'internautas': "url('/img/mobile/Internautas.jpg')",
        'puerto-de-chimbote': "url('/img/mobile/Puerto de Chimbote.jpg')",
        'desk-header': "url('/img/Chimboteros Portada.jpg')",
        'desk-pescadores': "url('/img/Equipo Gustar.jpg')",
        'desk-fotear': "url('/img/Navegando en el mar.jpg')",
        'desk-gustar': "url('/img/Gustar Portada.jpg')",
        'desk-viva': "url('/img/Chimbote en los 50s.jpg')",
        'desk-internautas': "url('/img/Smartphones.jpg')",
        'desk-aldea': "url('/img/Proyecto Aldea Portada.jpg')",
        'desk-lindo': "url('/img/Proyecto Lindo Portada.jpg')"
      }),
      height: {
        screenHalf: '50vh',
        screen70: '70vh',
        screen80: '80vh',
        screen85: '85vh',
        screen90: '90vh'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}