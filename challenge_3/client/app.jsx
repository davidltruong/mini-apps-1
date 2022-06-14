class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render () {
    return (<button onClick={(e) => {console.log(e)}}>checkout</button>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));