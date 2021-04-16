- install latest version of node
- install nodemon mongoose cors dotenv
- npx create-react-app
- install axios
- install bycrypt

to run server --> npm run start
to run client --> npm start, localhost:4000/

class App extends Component {
  constructor(){
    super()
    this.state = {
      fullName: '',
      username:'',
      password:'',
      phone:'',
      nationalID:''
    }
    this.changeFullName = this.changeFullName.bind(this)
    this.username = this.changeUsername.bind(this)
    this.password = this.changePassword.bind(this)
    this.changePhone = this.changePhone.bind(this)
    this.changeNationalID = this.changeNationalID.bind(this)
    this.onSubmit=this.onSubmit.bind(this)
  }

  changeFullName(event){
    this.setState({
      fullName: event.target.value
    })
  }
  changeUsername(event){
    this.setState({
      username: event.target.value
    })
  }
  changePassword(event){
    this.setState({
      password: event.target.value
    })
  }
    changePhone(event){
      this.setState({
        phone: event.target.value
      })
    }
      changeNationalID(event){
        this.setState({
          nationalID: event.target.value
        })
  }
   onSubmit(event){
     event.preventDefault()

     const registered=  {
       fullName: this.state.fullName,
       username: this.state.username,
       password: this.state.password,
       phone: this.state.phone,
       nationalID: this.state.nationalID,
     }

     axios.post('http://localhost:4000/user/addtodb', registered)
     .then(res=> console.log(res.data))

     this.setState({
       fullName:'',
       username:'',
       password:'',
       phone:'',
       nationalID:''
     })
   }

  render() { 
    return ( 

      <div>
        <div className="container">
          <div className='form-div'>
            <form onSubmit='this.onSubmit'>
              <input type='text'
              placeholder='Full Name'
              onChange={this.changeFullName}
              value={this.state.fullName}
              className='form-control form-group'
              />

              <input type='text'
              placeholder='Username'
              onChange={this.changeUsername}
              value={this.state.username}
              className='form-control form-group'
              />

              <input type='text'
              placeholder='Password'
              onChange={this.changePassword}
              value={this.state.password}
              className='form-control form-group'
              />

              <input type='text'
              placeholder='Phone Number'
              onChange={this.changePhone}
              value={this.state.phone}
              className='form-control form-group'
              />

              <input type='text'
              placeholder='National ID'
              onChange={this.changeNationalID}
              value={this.state.nationalID}
              className='form-control form-group'
              />

              <input type='submit' className='btn btn-danger btn-block' value='submit' />

            </form>
          </div>
        </div>
      </div>
     );
  }
}

