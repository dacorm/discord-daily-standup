import cn from 'clsx';
import { ChangeEvent, FC, InputHTMLAttributes } from 'react';
import styles from './input.module.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string;
    error?: string;
    label?: string;
}

export const Input: FC<InputProps> = ({
    onChange, className, value, error, label,
}) => (
    <>
        {label && <p className={styles.text}>{label}</p>}
        <input onChange={onChange} value={value} className={cn(styles.input, className)} />
        {error && <p>{error}</p>}
    </>
);
