import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { debounce } from '../../Utils';
import { getUser } from '../../service/UserService';

const Users = styled.div`
  max-height: 300px;
  overflow: scroll;
  margin-top: 15px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  border: 1px solid #000;
  padding: 20px;
  
  span {
    display: block;
    margin-bottom: 5px;
  }
`;

const UserInfo = styled.div`
  border-right: 1px solid #000;
  text-align: left;
  width: 260px;
`;

function UserListNew() {
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState('');
  const [filter, setFilter] = useState('');
  const debounceFunc = useCallback(debounce((userName) => setFilter(userName)), []);
  const onFilterValueChange = (e) => {
    setValue(e.target.value);
    debounceFunc(() => setFilter(e.target.value));
  };
  useEffect(() => {
    getUser(filter)
      .then((response) => setUsers(response.data))
      .catch((err) => console.log(err));
  }, [filter]);

  return (
    <div>
      <div>
        Filter:
        <input
          type="text"
          onChange={onFilterValueChange}
          value={value}
          placeholder="Enter username"
        />
      </div>
      <Users>
        {users.map((user) => (
          <Row key={user.id}>
            <UserInfo>
              <span>{`Name: ${user.name}`}</span>
              <span>{`Username: ${user.username}`}</span>
            </UserInfo>
            <div>
              <div>
                <span>{user.address.street}</span>
                <span>{user.address.suite}</span>
                <span>{user.address.city}</span>
                <span>{user.address.zipcode}</span>
              </div>
              <div>
                <span>{user.email}</span>
                <span>{user.phone}</span>
              </div>
            </div>
          </Row>
        ))}
      </Users>
    </div>
  );
}

export default UserListNew;
