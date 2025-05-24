import styles from './styles.module.css'

interface IProps {
time: string;
title: string;
imagePath: string;
}

export const TimingBlock = ({time, title, imagePath}: IProps) => {
    return (
        <div className={styles.wrapper}>
          <div className={styles.icon_wrapper}>
            <img className={styles.icon} src={imagePath} alt={''} />
          </div>

            <div className={styles.description_container}>
                <div className={styles.time}>{time}</div>
                <div className={styles.title}>{title}</div>
            </div>
        </div>
)
    ;
};