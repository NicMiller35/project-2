import { UserLogin } from '../interfaces/UserLogin';

const login = async (userInfo: UserLogin) => {
    try{
        const response = await fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        });

        const data = await response.json();

        if (!response.ok) {
             const errorData = await response.json();
            throw new Error(`Error: ${errorData.message}`);

        }


        return data;
    } catch (error) {
        console.log('Error from user login:', error);
        return Promise.reject( 'Could not log in user')
    }
}

export {login};