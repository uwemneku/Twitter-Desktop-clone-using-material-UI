import { createMuiTheme,  ThemeProvider } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'
import React from 'react'
import '@fontsource/roboto'
import Layout from './components/Layout'

const theme = createMuiTheme({
  palette:{
      primary: {
          main: blue[500]
      }
  }
})


export default function App() {
  return (
    <div >
      <ThemeProvider theme = {theme}>
        <Layout />
      </ThemeProvider>
    </div>
  )
}
