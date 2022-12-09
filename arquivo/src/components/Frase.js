import styles from '../css/Frase.module.css';

function Frase(props) {
  return (
    <div className={styles.container} >
      <p className={styles.fraseContent}>
        Fala dev sou o(a) {props.nome}, possuo conhecimento em <span>{props.comp}</span>.
      </p>
    </div>
  );
}

export default Frase;
