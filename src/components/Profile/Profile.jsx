import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.box}>
      <img className={css.image} src={image} alt="User avatar" />
      <p className={css.title}>{name}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.activity}>Followers</span>
          <span className={css.data}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.activity}>Views</span>{" "}
          <span className={css.data}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.activity}>Likes</span>{" "}
          <span className={css.data}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
