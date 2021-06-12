import React, { Component } from 'react';
import styled from 'styled-components';
import { debounce } from '../../Utils';
import { getUser } from '../../service/UserService';

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

const Users = styled.div`
  max-height: 300px;
  overflow: scroll;
  margin-top: 15px;
`;

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.debounceFunc = debounce(this.filterUsers);
    this.state = {
      data: [],
      filter: '',
      value: ''
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const { filter } = this.state;
    getUser(filter)
      .then((response) => this.setState({ data: response.data }))
      .catch((err) => console.log(err));
  }

  onFilterValueChange = (e) => {
    this.setState({ value: e.target.value });
    this.debounceFunc(e.target.value);
  };

  filterUsers = (searchValue) => {
    this.setState({ filter: searchValue }, this.fetchData);
  }

  render() {
    const { data, value } = this.state;
    return (
      <div>
        <div>
          Filter:
          <input
            type="text"
            onChange={this.onFilterValueChange}
            value={value}
            placeholder="Enter username"
          />
        </div>
        <Users>
          {data.map((user) => (
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
}
