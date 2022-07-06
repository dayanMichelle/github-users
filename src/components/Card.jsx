import formateDate from '../helpers/formateDate';
import styles from '../styles/Card.module.css'
const Card = ({ search, data }) => {

  return (
    <div className={styles.card}>
      <div className={styles.avatar}>
        <img src={`${data.avatar_url}`} alt="" />
      </div>
      <section>
        <div className={styles.header}>
          <div>
            <div className={styles.header_info}>
                 <h4>{data.name}</h4>
                 <p className={styles.created}>Joined {formateDate(data.created_at) }</p>
            </div>
           
            <p className={styles.login}>{data.login}</p>
            {data.bio ? <p className={styles.bio}>{data.bio}</p> : <p>This profile has no bio.</p>}
          </div>

         
        </div>
        <div className={styles.container_repo}>
            <div>
                <p className={styles.description}>Repos</p>
                <p className={styles.value}>{data.public_repos}</p>
            </div>
            <div>
                <p className={styles.description}>Followers</p>
                <p className={styles.value}>{data.followers}</p>
            </div>
            <div>
                <p className={styles.description}>Following</p>
                <p className={styles.value}>{data.following}</p>
            </div>
        </div>
        <div className={styles.container_info}>
            <div><i class="fa-solid fa-location-dot"></i> <p>{data.location}</p></div>
            <div><i class="fa-brands fa-twitter"></i> <p>{data.twitter_username}</p></div>
            <div><i class="fa-solid fa-link"></i><a href={`${data.html_url}`}>Web</a></div>
            <div><i class="fa-solid fa-building"></i><p>{data.company}</p></div>
        </div>
      </section>
    </div>
  );
};

export default Card;
