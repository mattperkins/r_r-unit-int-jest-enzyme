import * as React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import Header from './components/header';
import Headline from './components/headline';
// main ("ROOT") component 
class Root extends React.Component {

  render() {

    return (

      <>
        <Header />
        <Headline desc="This is a description" />
      </>


    )// end return
  }// end render
}// end component

ReactDOM.render(<Root />,
  document.getElementById('root'))
