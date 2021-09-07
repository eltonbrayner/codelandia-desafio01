import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://www.linkedin.com/in/eltonbrayner/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.typing}>
          Desenvolvido por <strong>Elton Brayner</strong>
        </span>
      </a>
    </footer>
  );
}
