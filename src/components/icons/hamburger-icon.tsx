export function HamburgerIcon({ className }: { className?: string }) {
  return (
    <svg
      width="18"
      height="11"
      viewBox="0 0 18 11"
      fill="none"
      className={className}
    >
      <path d="M0 0H18V1H0V0Z" fill="white"></path>
      <path d="M0 10H18V11H0V10Z" fill="white"></path>
    </svg>
  );
}
