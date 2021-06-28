import { useState, useEffect } from "react";
import Link from "next/link";
import cn from "classnames";
import styles from "./styles.module.scss";

const Header = (props) => {
  const [audio, setAudio] = useState(null);
  const [duration, setDuration] = useState(null);
  const [playing, setPlaying] = useState(false);
  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    setAudio(
      new Audio(
        "https://connect.monstercat.com/v2/release/8af041ca-2c79-49f0-8b5c-b64f5ed41823/track-stream/96cc6ed8-6c22-4820-9acd-ae0aacd07567"
      )
    );
  }, []);

  useEffect(() => {
    audio &&
      (audio.addEventListener(
        "timeupdate",
        function (ev) {
          var seconds = parseInt(audio.currentTime % 60);
          var minutes = parseInt((audio.currentTime / 60) % 60);

          setDuration(`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`);
        },
        (audio.volume = 0.25)
      ),
      playing ? audio.play() : audio.pause());
  }, [playing, audio]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__left}>
          <img
            className={styles.header__logo}
            src="https://www.monstercat.com/img/monstercat-logo.svg"
            alt="monstercat"
          />
        </div>

        <div className={styles.header__right}>
          <div className={styles.links}>
            <ul>
              <li>Music</li>
              <li>Artists</li>
              <li>Events</li>
              <li>Commercial</li>
              <li>Radio</li>
              <li>Gold</li>
              <li>Shop</li>
            </ul>
          </div>

          <Link href="/" passHref>
            <a className={styles["header__logo-wrapper"]}>
              <img
                className={styles["header__logo-wrapper__button"]}
                src="https://www.monstercat.com/img/monstercat-symbol.png"
                alt="weird"
              />
            </a>
          </Link>

          <button
            className={styles.header__hamburger}
            type="button"
            onClick={props.toggleNavigation}
          >
            <div className={styles.header__hamburger__wrapper}>
              <span
                className={cn(
                  styles.header__hamburger__line,
                  styles["header__hamburger__line--one"]
                )}
              >
                &nbsp;
              </span>
              <span
                className={cn(
                  styles.header__hamburger__line,
                  styles["header__hamburger__line--two"]
                )}
              >
                &nbsp;
              </span>
              <span
                className={cn(
                  styles.header__hamburger__line,
                  styles["header__hamburger__line--three"]
                )}
              >
                &nbsp;
              </span>
            </div>
          </button>
        </div>
      </header>
      <div className={styles["player-container"]}>
        <div className={styles["player-links"]}>
          <ul>
            <li>♫ PLAYER</li>
            <li>⍄ SIGN IN</li>
            <li>ʔ SEARCH</li>
          </ul>
        </div>
        <div className={styles.player}>
          <div className={styles["player-buttons"]}>
            {playing && (
              <>
                <p>Hero - Pegboard Nerds(Infected Mushroom Remix) |</p>
                <p>
                  &nbsp;
                  {duration} / {(audio.duration / 60).toFixed(2)}
                </p>
              </>
            )}
            <button>⭰</button>
            <button onClick={toggle}>{playing ? "❚❚" : "➤"}</button>
            <button>⭲</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
