import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from '../app/users/usersSlice';

const ListUsers = () => {

  const usuarios = useSelector((state) => state.users.listUsers);

  console.log(usuarios);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
  },[])

  return (
    <div>ListUsers
      <ul>
      {usuarios.map((usuario) => (
        <li key={usuario.id}>
          {usuario.first_name}
        </li>
      ))}
      </ul>
    </div>
  )
}

export default ListUsers