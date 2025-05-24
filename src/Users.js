import React, { useEffect, useState } from 'react'
import UserForm from './UserForm'
import UsersTable from './UsersTable'
import { Box } from '@mui/material'
import Axios from 'axios'
import { data } from 'react-router-dom'

const Users = () => {
  const [users, setUsers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [selecetedUser, setSelectedUser] = useState({});
  const [isEdit, setIsEdit] = useState(false);


  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    Axios.get('http://localhost:3001/api/user')
      .then(response => {
        setUsers(response?.data?.response || []);
      })
      .catch(error => {
        console.error("Axios error :", error);
      })
  }

  const addUser = (data) => {
    setSubmitted(true);

    const payload = {
      id: data.id,
      name: data.name,
    }
    Axios.post('http://localhost:3001/api/createuser', payload)
      .then(() => {
        getUsers();
        setSubmitted(false);
        isEdit(false);
      })
      .catch(error => {
        console.error("Axios error :", error);
      })
  }

  const updateUser = (data) => {
    setSubmitted(true);

    const payload = {
      id: data.id,
      name: data.name,
    }
    Axios.post('http://localhost:3001/api/updateuser', payload)
      .then(() => {
        getUsers();
        setSubmitted(false);
        isEdit(false)
      })
      .catch(error => {
        console.error("Axios error :", error);
      })
  }

  const deleteUser = (data)=>{

    Axios.post('http://localhost:3001/api/deleteuser', data)
      .then(() => {
        getUsers();
      })
      .catch(error => {
        console.error("Axios error :", error);
      })
  }

  return (
    <>
      <Box
        sx={{
          width: 'calc(100% - 100px)',
          margin: 'auto',
          marginTop: '100px'
        }}
      >
        <UserForm
          addUser={addUser}
          submitted={submitted}
          data={selecetedUser}
          isEdit = {isEdit}
          updateUser = {updateUser}
        />
        <UsersTable
          rows={users}
          selectedUser={data => {
            setSelectedUser(data)
            setIsEdit(true);
          }}
          deleteUser = {data=> window.confirm('Are You Sure ? ') && deleteUser(data)}
        />
      </Box>
    </>
  )
}

export default Users