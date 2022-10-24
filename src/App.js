import './App.css';

export default function App() {
  return (
    <div className='container'>
      <div className='sign-up'>
        <div className='form'>
          <h1>Sign up</h1>

          <form>
            <i class="fa fa-user"></i>

            <input type='text' id='name' name='name' placeholder='Your Name' />

            <br />

            <i class="fa fa-phone"></i>

            <input type='text' id='phone-number' name='phone-number' placeholder='Your Phone Number' />

            <br />

            <i class="fa fa-lock"></i>

            <input type='password' id='password' name='password' placeholder='Password' />

            <br />

            <i class="fa fa-lock-open"></i>

            <input type='password' id='repeat-password' name='repeat-password' placeholder='Repeat your password' />

            <br />

            <div className='agreement'>
              <input type='checkbox' id='agreement' name='agreement' />

              <label htmlFor='agreement'>I agree all statements in <a href='#'>Terms of service</a></label>
            </div>

            <button typeof='button'>Register</button>
          </form>
        </div>

        <div className='member'>
          <img src={'https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg'} alt='Sign up' />

          <button type='button'>I am already member</button>
        </div>
      </div>
    </div>
  );
}
