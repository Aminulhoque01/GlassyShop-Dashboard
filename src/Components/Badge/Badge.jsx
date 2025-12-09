
const Badge=(props)=>{
    return(
        <div>
            <span className={`inline-block py-1 px-3 text-[12px] rounded-full capitalize 
                ${props.status === "pending" && 'bg-primary text-white'}   
                 ${props.status === "confirm" && 'bg-green-500 text-white'}   
                  ${props.status === "delivered" && 'bg-gray-500 text-white'}`}>{props.status}</span>
        </div>
    )
};

export default Badge;