class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    var formOne = document.getElementById('one');
    var formTwo = document.getElementById('two');
    var formThree = document.getElementById('three');
    var final = document.getElementById('final');
    formOne.style.display = 'none';
    formTwo.style.display = 'none';
    formThree.style.display = 'none';
    final.style.display = 'none';
  }

  checkoutClick = () => {
    var checkout = document.getElementById('checkout');
    checkout.style.display = 'none'
  }

  btnOneClick = () => {
    var formOne = document.getElementById('one');
    formOne.style.display = 'block';
  }

  btnTwoClick = () => {
    var formOne = document.getElementById('one');
    formOne.style.display = 'none';
    var formTwo = document.getElementById('two');
    formTwo.style.display = 'block';
  }

  btnThreeClick = () => {
    var formTwo = document.getElementById('two');
    formTwo.style.display = 'none';
    var formThree = document.getElementById('three');
    formThree.style.display = 'block';
  }

  btnFinalClick = () => {
    var formThree = document.getElementById('three');
    formThree.style.display = 'none';
    var formFinal = document.getElementById('final');
    formFinal.style.display = 'block';
    $('#final').prepend('<div>'+
    `<div>name: ${document.getElementById("name").value}</div>`+
    `<div>email: ${document.getElementById("email").value}</div>`+
    `<div>password: ${document.getElementById("password").value}</div>`+
    `<div>address1: ${document.getElementById("address1").value}</div>`+
    `<div>address2:${document.getElementById("address2").value}</div>`+
    `<div>city: ${document.getElementById("city").value}</div>`+
    `<div>state: ${document.getElementById("state").value}</div>`+
    `<div>zip code: ${document.getElementById("zipcode").value}</div>`+
    `<div>credit card: ${document.getElementById("cc").value}</div>`+
    `<div>expiration date: ${document.getElementById("expire").value}</div>`+
    `<div>cvv: ${document.getElementById("cvv").value}</div>`+
    `<div>billing zip code: ${document.getElementById("billingzip").value}</div>`+
    '</div>')
  }

  submit = () => {
    let obj = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
      address1: document.getElementById('address1').value,
      address2: document.getElementById('address2').value,
      city: document.getElementById('city').value,
      state: document.getElementById('state').value,
      zipcode: document.getElementById('zipcode').value,
      cc: document.getElementById('cc').value,
      expire: document.getElementById('expire').value,
      cvv: document.getElementById('cvv').value,
      billingzip: document.getElementById('billingzip').value,
    }
    $.ajax({
      type:'POST',
      url: '/checkout',
      data: obj,
      success: () => {console.log('success')}
    })
  }


  render () {
    return (
      <div>
        <button id='checkout' onClick={() => {this.checkoutClick(); this.btnOneClick();}}>checkout</button>
        <form id='one'>
          <label>Name</label>
          <input type='text' name='name' id='name' required></input><br></br>
          <label>Email</label>
          <input type='text' name='email' id='email' required></input><br></br>
          <label>Password</label>
          <input type='text' name='password' id='password' required></input><br></br>
          <button onClick={(e) => {this.btnTwoClick(); e.preventDefault();}}>Next</button>
        </form>
        <form id='two'>
          <label>Addres Line 1</label>
          <input type='text' name='address1' id='address1' required></input><br></br>
          <label>Address Line 2</label>
          <input type='text' name='address2' id='address2'></input><br></br>
          <label>City</label>
          <input type='text' name='city' id='city' required></input><br></br>
          <label>State</label>
          <input type='text' name='state' id='state' required></input><br></br>
          <label>Zip code</label>
          <input type='text' name='zipcode' id='zipcode' required></input><br></br>
          <button onClick={(e) => {this.btnThreeClick(); e.preventDefault();}}>Next</button>
        </form>
        <form id='three'>
          <label>Credit Card #</label>
          <input type='text' name='cc' id='cc' required></input><br></br>
          <label>Expiry Date</label>
          <input type='text' name='expire' id='expire' required></input><br></br>
          <label>CVV</label>
          <input type='text' name='cvv' id='cvv' required></input><br></br>
          <label>Billing Zip Code</label>
          <input type='text' name='billingzip' id='billingzip' required></input><br></br>
          <button onClick={(e) => {this.btnFinalClick(); e.preventDefault()}}>Next</button>
        </form>
        <div id='final'>
          <form>
            <button onClick={(e) => {this.submit();}}>Submit</button>
          </form>
        </div>
      </div>


    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));