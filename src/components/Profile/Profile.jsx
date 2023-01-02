import propTypes from 'prop-types';
export const Profile = ({username, tag, location, avatar, stats}) => {
    return (
        <div class="profile">
            <div class="description">
                <img
                    src={avatar}
                    alt="User avatar"
                    class="avatar"
                    width="250px"
                />
                <p class="name">{username}</p>
                <p class="tag">@{tag}</p>
                <p class="location">{location }</p>
            </div>

            <ul class="stats">
                <li>
                    <span class="label">Followers</span>
                    <span class="quantity">{stats.followers }</span>
                </li>
                <li>
                    <span class="label">Views</span>
                    <span class="quantity">{stats.views }</span>
                </li>
                <li>
                    <span class="label">Likes</span>
                    <span class="quantity">{stats.likes }</span>
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

