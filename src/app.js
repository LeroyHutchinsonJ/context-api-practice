import React from "react";

//Create context returns a provider and a consumer, store them both in UserContext
const UserContext = React.createContext();

//Components that need the data can tap into the consumer part of the context
const UserAvatar = ({ size }) => (
  <UserContext.Consumer>
    {user => (
      <img
        className={`user-avatar ${size || ""}`}
        alt="user avatar"
        src={user.avatar}
      />
    )}
  </UserContext.Consumer>
);

const UserStats = () => (
  <UserContext.Consumer>
    {user => (
      <div className="user-stats">
        <div>
          <UserAvatar user={user} />
          {user.name}
        </div>
        <div className="stats">
          <div>{user.followers} Followers</div>
          <div>Following {user.followring}</div>
        </div>
      </div>
    )}
  </UserContext.Consumer>
);

//Accept children and render them

const Nav = ({ children }) => (
  <div className="nav">
    <UserAvatar size="small" />
  </div>
);

const Content = () => <div className="content">main content here</div>;

const SideBar = () => (
  <div className="sidebar">
    <UserStats />
  </div>
);

const Body = () => (
  <div className="body">
    <SideBar />
    <Content />
  </div>
);

//Inside app I have to make context available using provider
class App extends React.Component {
  state = {
    user: {
      avatar: "https://www.gravatar.com/avatar/5c3dd2d257ff0e14dbd2583485dbd44b"
    },
    name: "Dave",
    followers: 1234,
    following: 123
  };

  render() {
    return (
      <div className="App">
        <UserContext.Provider value={this.state.user}>
          <Nav />
          <Body />
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
