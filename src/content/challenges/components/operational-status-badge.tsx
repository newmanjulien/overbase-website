import styles from "./operational-status-badge.module.css";

interface OperationalStatusBadgeProps {
  label: string;
}

export function OperationalStatusBadge({
  label,
}: OperationalStatusBadgeProps) {
  return (
    <div className={styles.badge}>
      <OperationalGridIcon />
      <span className={styles.label}>{label}</span>
    </div>
  );
}

function OperationalGridIcon() {
  return (
    <svg viewBox="0 0 10.5 10.5" aria-hidden="true" className={styles.icon}>
      <g className={styles.row0}>
        <path d="M0 0H1.5V1.5H0V0Z" className={styles.cell} />
        <path d="M3 0H4.5V1.5H3V0Z" className={styles.cell} />
        <path d="M6 0H7.5V1.5H6V0Z" className={styles.cell} />
        <path d="M9 0H10.5V1.5H9V0Z" className={styles.cell} />
      </g>
      <g className={styles.row1}>
        <path d="M0 3H1.5V4.5H0V3Z" className={styles.cell} />
        <path d="M3 3H4.5V4.5H3V3Z" className={styles.cell} />
        <path d="M6 3H7.5V4.5H6V3Z" className={styles.cell} />
        <path d="M9 3H10.5V4.5H9V3Z" className={styles.cell} />
      </g>
      <g className={styles.row2}>
        <path d="M0 6H1.5V7.5H0V6Z" className={styles.cell} />
        <path d="M3 6H4.5V7.5H3V6Z" className={styles.cell} />
        <path d="M6 6H7.5V7.5H6V6Z" className={styles.cell} />
        <path d="M9 6H10.5V7.5H9V6Z" className={styles.cell} />
      </g>
      <g className={styles.row3}>
        <path d="M0 9H1.5V10.5H0V9Z" className={styles.cell} />
        <path d="M3 9H4.5V10.5H3V9Z" className={styles.cell} />
        <path d="M6 9H7.5V10.5H6V9Z" className={styles.cell} />
        <path d="M9 9H10.5V10.5H9V9Z" className={styles.cell} />
      </g>
    </svg>
  );
}
