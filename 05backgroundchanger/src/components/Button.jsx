const colorClasses = {
  red: "bg-red-500 hover:bg-red-700",
  blue: "bg-blue-500 hover:bg-blue-700",
  green: "bg-green-500 hover:bg-green-700",
  orange: "bg-orange-500 hover:bg-orange-700",
  olive: "bg-olive hover:bg-olive-",
  white: "bg-white hover:bg-white-500 text-black",
  yellow: "bg-yellow-300 hover:bg-yellow-700 text-black",
};

function Button({color, setColor}) {   
    return (
        <button className={`${colorClasses[color]}  text-white text-xs py-2 px-4 rounded`} 
        onClick={() => setColor(color)}>
            {color}
        </button>
    )
}

export default Button