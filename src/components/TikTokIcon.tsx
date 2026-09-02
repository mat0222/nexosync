type TikTokIconProps = {
  size?: number;
  className?: string;
};

export const TikTokIcon = ({ size = 16, className }: TikTokIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden
  >
    <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V8.95c1.79 1.38 3.5 1.73 4.61 1.86v-3.1c-1.26-.12-2.63-.7-3.55-1.89Z" />
  </svg>
);
