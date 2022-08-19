import wonderWError from 'assets/wonderW.svg';
import ReactAudioPlayer from 'react-audio-player';
import styles from './index.module.scss';
import AngRRRa from 'assets/AngRRRRa.mp3';

export default function ErrorPlug() {
  return (
    <section className={styles.section}>
      <h2 className="visually-hidden">Page not found</h2>
      <img
        className={styles.panda}
        src={wonderWError}
        alt="Wonder Worker customed error page"
      />
      <ReactAudioPlayer
        className={styles.mood}
        src={AngRRRa}
        controls
        autoPlay
      />
    </section>
  );
}
