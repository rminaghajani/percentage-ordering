import { useStyles } from "./TableStyles";

export default function NameContainer({ imageUrl, name, symbol }) {
  const styles = useStyles();
  return (
    <div className={styles.nameContainer}>
      <img src={imageUrl} alt={name} className={styles.img} />
      <p className={styles.name}>{name}</p>
      <p>{symbol.toUpperCase()}</p>
    </div>
  );
}
