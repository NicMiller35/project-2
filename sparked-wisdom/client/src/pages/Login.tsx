import {useState, FormEvent, ChangeEvent} from 'react';

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
            const response = await login(loginData);
            Auth.login(response.data.token);
        } catch (error) {
            console.error('Login error:', error);
        }
    };
    
        return (
          <div>
            <div>
      <div className= 'lanheader'>
      </div>
      <div className= 'lanp'>
      <h1>Welcome to Sparked Wisdom!</h1>
      <img src="https://previews.123rf.com/images/irozvodovskyi/irozvodovskyi2101/irozvodovskyi210100103/162371027-vector-lamp-bulb-icon-on-white-isolate.jpg" alt="Light bulb icon representing Sparked Wisdom"  className="logo-image"/>
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
          </div>
          </div>
        );
        
};
export default Login;