import styles from '@/components/alert.module.css';
import { clsx } from 'clsx';

export default function Alert({
  children,
  type,
}: {
  children: React.ReactNode;
  type: 'success' | 'error';
}) {
  return (
    <div
      className={clsx({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}
    >
      {children}
    </div>
  );
}
