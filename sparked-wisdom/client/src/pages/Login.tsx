import {useState, FormEvent, ChangeEvent} from 'react';
import UserForm from '../pages/UserForm';
import Auth from '../utils/auth';
import {login} from '../api/authAPI';

const Login = () => {
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const data = await login(loginData);
            Auth.login(data.token);
        } catch (err) {
            console.error('Login error:', err);
        }
    };
    
        return (
          <div>
            <div>
      <div className= 'lanheader'>
      <h1>Welcome to Sparked Wisdom!</h1>
      </div>
      <div className= 'lanp'>
      <p>Sparked Wisdom is a platform for discovering inspirational quotes. We hope you find the wisdom you need to spark your day! If you would like to contribute to our collection of quotes, please sign up or log in.
        </p>
        </div>
    </div>
          <div className="container mt-5">
            <form className="p-4 border rounded shadow" onSubmit={handleSubmit}>
              <h1 className="text-center mb-4">Login</h1>
              
              
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form-control"
                  value={loginData.username || ''}
                  onChange={handleChange}
                  placeholder="Enter your username"
                />
              </div>
        
              
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  value={loginData.password || ''}
                  onChange={handleChange}
                  placeholder="Enter your password"
                />
              </div>
        
              
              <div className="text-center">
                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </div>
            </form>
            <UserForm/>
          </div>
          </div>
        );
        
};
export default Login;