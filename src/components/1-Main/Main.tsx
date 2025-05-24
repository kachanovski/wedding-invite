import styles from './styles.module.css'
import we from './1.png'

export const Main = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title_container}>
                <div className={`${styles.title} ${styles.rotate_left}`}>
                    МЫ
                </div>

                <div className={`${styles.title} ${styles.rotate_right}`}>
                    ЖЕНИМСЯ
                </div>
            </div>


            <img className={styles.image} src={we}/>
        </div>
    );
};