import './App.css'; // FOR THE FONTS
import React from 'react'
import Main from './Components/Main'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Provider } from 'react-redux'
import Store from './Store/configureStore'

export default class App extends React.Component {

  render() {
    return (
        <MuiThemeProvider style={{fontFamily: "Copperplate Bold"}} theme={theme}>
            <Provider store={Store}>
                <Main />
            </Provider>
        </MuiThemeProvider>
    )
  }

}

const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#252525',
    },
    secondary: {
        main: '#6EBDBB',
    },
  },
  typography: {
    fontFamily: "'PT Sans', sans-serif",
  }
})
