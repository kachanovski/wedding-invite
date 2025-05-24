import {ReactNode} from "react";
import styles from './styles.module.css'
import classNames from 'classnames';

interface IProps {
    children: ReactNode
    className?: string
    variant?: 'white' | 'filled'
    rotate?: 'left' | 'right'
}

export const Title = ({children, rotate, variant, className}:IProps) => {
    return (
        <div className={classNames(styles.title, className, {
            [styles.filled]: variant === 'filled',
            [styles.white]: variant === 'white',
            [styles.left]: rotate === 'left',
            [styles.right]: rotate === 'right',
        })}>
            {children}
        </div>
    );
};