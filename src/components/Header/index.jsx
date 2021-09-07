import Image from 'next/image';
import styles from './Header.module.scss';
import searchIcon from 'src/assets/icons/search-outlined.svg';

export function Header() {
  return (
    <header className={styles.container}>
      <article>
        <div className={styles.contentText}>
          <span>Codelândia</span>
          <span>blog</span>
        </div>

        <div className={styles.inputWrapper}>
          <div className={styles.searchicon}>
            <Image alt="Search" src={searchIcon} />
          </div>
          <input type="text" placeholder="Pesquisar no blog" />
        </div>
      </article>
    </header>
  );
}
