import * as React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import './index.scss'
import Header from './components/header';

// main ("ROOT") component 
class Root extends React.Component {

  render() {

    return (

      <>
        <Header />
      </>


    )// end return
  }// end render
}// end component

ReactDOM.render(<Root />,
  document.getElementById('root'))
registerServiceWorker()
