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
            console.error('Login error:', err);
        }
    };
    return (
        <div className='container'>
          <form className='form' onSubmit={handleSubmit}>
            <h1>Login</h1>
            <label >Username</label>
            <input 
              type='text'
              name='username'
              value={loginData.username || ''}
              onChange={handleChange}
            />
          <label>Password</label>
            <input 
              type='password'
              name='password'
              value={loginData.password || ''}
              onChange={handleChange}
            />
            <button type='submit'>Submit Form</button>
          </form>
        </div>
        
      )

}