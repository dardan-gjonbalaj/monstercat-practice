import cn from "classnames";
import styles from "./styles.module.scss";

const Body = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles["banner-shade"]}>
          <div className={styles.gradient}>
            <div className={styles["container-flex"]}>
              <div className={styles["album-art"]}>
                <img
                  className={styles["album-img"]}
                  src="https://connect.monstercat.com/v2/release/8af041ca-2c79-49f0-8b5c-b64f5ed41823/cover?image_width=512"
                />
              </div>
              <div className={styles.info}>
                <div className={styles["album-name"]}>
                  HERO (INFECTED MUSHROOM REMIX)
                </div>
                <div className={styles["artist-name"]}>
                  Pegboard Nerds feat. Elizaveta
                </div>
                <div className={styles["release-date"]}>
                  Released December 17, 2020
                </div>

                <ul className={styles.avatar}>
                  <li>
                    <div className={styles["artist-circle"]}>
                      <a href="/artist/pegboardnerds">
                        <img
                          src="https://connect.monstercat.com/v2/artist/4fe7b148-9f58-4cab-97e9-07654e099047/image?fallbackUrl=https%3A%2F%2Fassets.monstercat.com%2Fartists-profile-images%2Fpromo-artist.jpg&amp;image_width=256"
                          title="Pegboard Nerds"
                        />
                      </a>
                    </div>
                    <div className={styles["tool-tip"]}>
                      <h6>Pegboard Nerds</h6>
                    </div>
                  </li>
                  <li>
                    <div className={styles["artist-circle"]}>
                      <a href="/artist/elizaveta">
                        <img
                          src="https://connect.monstercat.com/v2/artist/7778cfb9-080f-4a71-b812-847150f19798/image?fallbackUrl=https%3A%2F%2Fassets.monstercat.com%2Fartists-profile-images%2Fpromo-artist.jpg&amp;image_width=256"
                          title="Elizaveta"
                        />
                      </a>
                    </div>
                    <div className={styles["tool-tip"]}>
                      <h6>Elizaveta</h6>
                    </div>
                  </li>
                  <li>
                    <div className={styles["artist-circle"]}>
                      <a href="/artist/infectedmushroom">
                        <img
                          src="https://connect.monstercat.com/v2/artist/4d7e7854-16c2-475c-a4fc-826a29a7fc7d/image?fallbackUrl=https%3A%2F%2Fassets.monstercat.com%2Fartists-profile-images%2Fpromo-artist.jpg&amp;image_width=256"
                          title="Infected Mushroom"
                        />
                      </a>
                    </div>
                    <div className={styles["tool-tip"]}>
                      <h6>Infected Mushroom</h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
{
  /* <img
            className={styles["album-art"]}
            src="https://connect.monstercat.com/v2/release/aedafcc1-efea-4387-a425-b2f63f56370d/cover?image_width=512"
          /> */
}
{
  /* <div className={styles["art-container"]}>
          <div className={styles["album-name"]}>
            <h1>Level Days</h1>

            <div className={styles["artist-name"]}>
              <h3>Conro</h3>
            </div>
            <div className={styles["release-date"]}>Released May 22, 2020</div>
          </div>
        </div> */
}
