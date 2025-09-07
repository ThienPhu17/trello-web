import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { cyan, deepOrange, orange, teal } from '@mui/material/colors'

// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: '58px',
    appBoardHeight: '60px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange
      }
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange
      }
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar':{
            with: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb':{
            backgroundColor:'#b2bec3',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover':{
            backgroundColor:'#55efc4'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem'
        })
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem',
          '.MuiOutlinedInput-notchedOutline':{
            borderColor: theme.palette.primary.light
          },
          '&:hover':{
            '.MuiOutlinedInput-notchedOutline':{
              borderColor: theme.palette.primary.light
            }
          },
          '& fieldset': {
            borderWidth:'1px: important'
          }
        })
      }
    }
  }
  // ..other properties
})

export default theme