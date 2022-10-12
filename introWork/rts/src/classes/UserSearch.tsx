import { Component } from "react";

interface User {
  name: string;
  age: number;
}
interface UserSearchProps {
  users: User[];
}
interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: "",
    user: undefined,
  };

  onClick = () => {
    for (let i = 0; i < this.props.users.length; i++) {
      if (this.props.users[i].name === this.state.name) {
        this.setState({ user: this.props.users[i] });
      }
    }
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <div></div>
        <button onClick={this.onClick}>Find User</button>
        <div>{this.state.user && this.state.user.name}</div>
      </div>
    );
  }
}
export default UserSearch;
