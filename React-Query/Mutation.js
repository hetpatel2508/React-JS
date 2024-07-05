/*
    Mutations typically involve actions like creating, updating, or deleting data, and they are 
    essential for applications that need to interact with backend systems to perform CRUD operations.
*/

const userData = {
    name: 'Het Patel',
    email: 'hetpatel@gmail.com',
}

const Mutation = useMutation( updatedUserData =>
    axios.post(`/api/users/`, updatedUserData)
);

const handleSubmit = async ()=>{
    await Mutation.mutateAsync(userData);
}


/*
We can also use

Mutation.isSuccess
Mutation.isLoading
Mutation.isError
Mutation.error
Mutation.data

Mutation.mutate         
Mutation.mutateAsync  
//Use mutate or mutateAsync to initiate the mutation operation of dedicate mutate variable.
*/





// Example :

import { useMutation } from 'react-query';
import axios from 'axios';

const MutationExample = () => {
  const { mutate, mutateAsync, isLoading, isError, isSuccess, data, error } = useMutation(
    updatedUserData => axios.post('/api/users/', updatedUserData)
  );

  const handleSubmit = async (userData) => {
    try {
      await mutateAsync(userData);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div>
      <button onClick={() => handleSubmit({ name: 'Het Patel', email: 'hetpatel@gmail.com' })}>
        Create User
      </button>
      {isLoading && <p>Creating user...</p>}
      {isError && <p>Error creating user: {error.message}</p>}
      {isSuccess && <p>User created successfully!</p>}
    </div>
  );
};