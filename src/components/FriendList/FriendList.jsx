import FriendListItem from "../FriendListItem/FriendListItem";
import "./FriendList.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={CSS.friends}>
      {friends.map((friend) => {
        return (
          <li key={friend.id} className={CSS.friend}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;