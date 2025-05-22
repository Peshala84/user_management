import React from 'react'
import UserForm from './UserForm'
import UsersTable from './UsersTable'
import { Box } from '@mui/material'

const users = [
{
    id:1,
    name:'ramesh',
},
{
    id:2,
    name:'peshala',
}
]

const Users = () => {
  return (
   <>
     <Box>
        <UserForm/>
     <UsersTable rows={users}/>
     </Box>
   </>
  )
}

export default Users