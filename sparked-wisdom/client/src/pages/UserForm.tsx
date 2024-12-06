import {ChangeEvent, FormEvent, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {UserData} from '../interfaces/UserData';
import {createUser} from '../api/userAPI';

const UserForm = () => {
  const [newUser, setNewUser] = useState<UserData | undefined>({
    id: null,
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const createNewUser = async (body: UserData) => {
    try {
      const data = await createUser(body);
      return data;
    } catch (err) {
      console.error('Failed to create user', err);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    setNewUser((prev) => (prev ? {...prev, [name]: value} : undefined));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (newUser) {
      const data = createNewUser(newUser);
      console.log(data);
      navigate('/');
    }
  };

  return (
    <>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <h1>Add New User</h1>
          <label>New User</label>
          <input
            type="text"
            name="username"
            value={newUser?.username || ''}
            onChange={handleChange}
          />
          <label>New Password</label>
          <input
            type="password"
            name="password"
            value={newUser?.password || ''}
            onChange={handleChange}
          />
          <button type="submit" onSubmit={handleSubmit}>Create</button>
        </form>
      </div>
    </>
  );
};

export default UserForm;