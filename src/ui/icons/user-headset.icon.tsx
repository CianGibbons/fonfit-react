const UserHeadsetIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M12 2a7 7 0 0 0-7 7 3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1c.6 0 1-.4 1-1V9a5 5 0 1 1 10 0v7a3 3 0 0 1-3 3 2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h1a2 2 0 0 0 1.7-1h.4a5 5 0 0 0 4.8-4h.1a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3 7 7 0 0 0-7-7Zm1.5 3.3a4 4 0 0 0-4.4 1 1 1 0 0 0 1.4 1.3 2 2 0 0 1 2.9 0A1 1 0 1 0 14.8 6a4 4 0 0 0-1.3-.8Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default UserHeadsetIcon;
