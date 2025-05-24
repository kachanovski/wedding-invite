import {ReactNode} from "react";
import styles from './styles.module.css'

interface IProps {
    children: ReactNode;
    href?: string;
}

export const Button = ({children, href}:IProps) => {
    return (
        <a href={href} target={'_blank'} className={styles.button}>
            {children}
        </a>
    );
};