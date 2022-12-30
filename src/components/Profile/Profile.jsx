import propTypes from 'prop-types';
export const Profile = ({username, tag, location, avatar, stats}) => {
    return (
        <div class="profile">
            <div class="description">
                <img
                    src={avatar}
                    alt="User avatar"
                    class="avatar"
                />
                <p class="name">{username}</p>
                <p class="tag">@{tag}</p>
                <p class="location">{location }</p>
            </div>

            <ul class="stats">
                <li>
                    <span class="label">{stats.followers }</span>
                    <span class="quantity">1000</span>
                </li>
                <li>
                    <span class="label">{stats.views }</span>
                    <span class="quantity">2000</span>
                </li>
                <li>
                    <span class="label">{stats.likes }</span>
                    <span class="quantity">3000</span>
                </li>
            </ul>
        </div>
    )
};


Profile.propTypes = {
    username: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    avatar: propTypes.string.isRequired,
    stats: propTypes.shape({
        followers: propTypes.number.isRequired,
        views: propTypes.number.isRequired,
        likes: propTypes.number.isRequired,
    })
};

//  const user = {
//     "username": "Jacques Gluke",
//     "tag": "jgluke",
//     "location": "Ocho Rios, Jamaica",
//     "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
//     "stats": {
//         "followers": 5603,
//         "views": 4827,
//         "likes": 1308
//     }
// }