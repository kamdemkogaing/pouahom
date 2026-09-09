export default function Container({ children, className = "" }) {
  return <div className={`pouahom-container ${className}`}>{children}</div>;
}
