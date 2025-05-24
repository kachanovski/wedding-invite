import styles from './styles.module.css'

interface IProps {
color: string;
}

export const PaletteBlock = ({color}: IProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.block} style={{backgroundColor: color}}/>
        </div>
    );
};