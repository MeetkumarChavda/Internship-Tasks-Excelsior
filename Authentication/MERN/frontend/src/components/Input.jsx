const Input = ({...props}) => {
  return (
    <div className="relative mb-6">
        <input 
            {...props}
            className="w-full p-1 rounded-lg border border-gray-700 focus:ring-1
             placeholder-gray-400 transition duration-200"
        />
    </div>
  )
}

export default Input