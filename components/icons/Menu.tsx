const Menu = ({ ...props }) => {
  return (
    <svg
      width={23}
      height={16}
      viewBox="0 0 23 16"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 1h20.571M1 8h20.571M1 15h20.571"
        // stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Menu
