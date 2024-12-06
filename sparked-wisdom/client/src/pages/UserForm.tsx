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
  const [isFormVisible, setIsFormVisible] = useState(false);

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

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#444B6E', // Background color for the entire view
    }}
  >
    {/* Trigger Button */}
    <button
      onClick={toggleFormVisibility}
      style={{
        padding: '10px 20px',
        backgroundColor: '#444B6E', // Button background color
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
      }}
    >
      {isFormVisible ? 'Close Form' : 'Add New User'}
    </button>
  
    {/* Modal Form */}
    {isFormVisible && (
      <>
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '20px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px',
            zIndex: 1000,
            width: '300px',
          }}
        >
          <form
            className="form"
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h1 style={{ color: '#444B6E' }}>Add New User</h1>
            <label style={{ alignSelf: 'flex-start', marginBottom: '5px' }}>New User</label>
            <input
              type="text"
              name="username"
              value={newUser?.username || ''}
              onChange={handleChange}
              style={{
                marginBottom: '10px',
                width: '100%',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '5px',
              }}
            />
            <label style={{ alignSelf: 'flex-start', marginBottom: '5px' }}>New Password</label>
            <input
              type="password"
              name="password"
              value={newUser?.password || ''}
              onChange={handleChange}
              style={{
                marginBottom: '20px',
                width: '100%',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '5px',
              }}
            />
            <button
              type="submit"
              style={{
                padding: '10px 20px',
                backgroundColor: '#444B6E', // Same color as the background and trigger button
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
              }}
            >
              Create
            </button>
          </form>
        </div>
  
        {/* Overlay to close the form when clicking outside */}
        <div
          onClick={toggleFormVisibility}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
          }}
        ></div>
      </>
    )}
  </div>
  
    );
};

export default UserForm;