import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUsers } from '../redux/usersSlice';
import '../styles.css';

const UserList = () => {
  const users = useSelector(selectUsers);

  return (
    <div className="container">
      <h1 className="title">Список пользователей</h1>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            <Link to={`/user/${user.id}`} className="user-link">
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
