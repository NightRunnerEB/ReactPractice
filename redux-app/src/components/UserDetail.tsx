import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateUserName, selectUserById } from '../redux/usersSlice';
import { RootState } from '../redux/store';
import '../styles.css';

const UserDetail = () => {
  const { userId } = useParams<{ userId: string }>();
  const user = useSelector((state: RootState) => selectUserById(Number(userId))(state));
  const [name, setName] = useState(user?.name || '');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!user) {
    return <div className="container">Пользователь не найден!</div>;
  }

  const handleChangeName = () => {
    dispatch(updateUserName({ id: user.id, name }));
    navigate('/');
  };

  return (
    <div className="container">
      <h1 className="title">Редактирование пользователя</h1>
      <div className="form-group">
        <label>Имя:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className="input-field"
        />
      </div>
      <button onClick={handleChangeName} className="save-button">Сохранить</button>
    </div>
  );
};

export default UserDetail;
