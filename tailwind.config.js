// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        animation: {
          'float-slow': 'float 12s ease-in-out infinite',
          'float-medium': 'float 8s ease-in-out infinite',
          'float-fast': 'float 6s ease-in-out infinite',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
            '50%': { transform: 'translateY(-20px) rotate(2deg)' },
          }
        }
      }
    }
  }