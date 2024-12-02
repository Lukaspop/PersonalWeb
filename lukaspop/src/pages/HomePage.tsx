import styles from './HomePage.module.css';
export const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1>Ahoj, ty taško!</h1>
      <p>jmenuju se <span className={styles.bolt}>Lukas Pop</span> a jsem majitelem <span className={styles.bolt}>Mléčné dráhy</span>.</p>
      <p> jo a jinak Citroen C3 je <span className={styles.orange}>pomeranč</span>. </p>
    </div>
  );
};

export default HomePage;
