import propTypes from 'prop-types';
export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return
    <li class="item">
        key = {id}
        <span class="status">{isOnline}</span>
        <img class="avatar" src={avatar} alt="User avatar" width="48" />
        <p class="name">{name}</p>
    </li>
};

FriendListItem.propTypes = {
   
}
