import cn from 'clsx';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

import styles from './button.module.css';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
    children?: ReactNode;
}

export type Ref = HTMLButtonElement;

export const Button = forwardRef<Ref, Props>(
    (
        {
            className,
            loading = false,
            disabled,
            onClick,
            children,
            ...rest
        },
        ref,
    ) => {
        const classList = cn(
            styles.root,
            className,
        );

        return (
            <button
                ref={ref}
                disabled={loading ?? disabled}
                className={classList}
                onClick={loading ? undefined : onClick}
                aria-disabled={loading ?? disabled}
                {...rest}
            >
                {loading ? 'Loading…' : children}
            </button>
        );
    },
);
