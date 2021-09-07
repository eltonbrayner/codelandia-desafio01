import { HeartBtn } from '../HeartBtn';
import styles from './Post.module.scss';

export function Post({
  postId = 0,
  date = '00 de mês, 1990',
  title = 'Agora é oficial: o Windows 11 está vindo',
  content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.',
  favorite,
  makeFavorite,
}) {
  function handleFavorite() {
    makeFavorite({ postId, favorite: !favorite });
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>{date}</span>
        <button onClick={handleFavorite}>
          <HeartBtn favorite={favorite} />
        </button>
      </div>
      <div className={styles.content}>
        <span>{title}</span>
        <p>{content}</p>
      </div>
    </div>
  );
}
