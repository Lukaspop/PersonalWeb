import styles from './HomePage.module.css';
export const HomePage = () => {
  return (
    <div>
      <h1>Ahoj ty beta-samče</h1>
      <p>jmenuju se <span className={styles.bolt}>Lukas Pop</span>a jsem majitelem mléčné dráhy.</p>
    </div>
  );
};

export default HomePage;
