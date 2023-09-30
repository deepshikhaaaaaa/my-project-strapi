export default function Cards(props){
    console.log()
    return(
        <div className="h-[400px] w-[500px] border-solid border-gray-400 border-[2px] bg-yellow-100">
            <p>heading</p>
            <p>{props.data.attributes.heading}</p>
            <p>description</p>
            <p>{props.data.attributes.description}</p>
            <p>content</p>
            <p>
            {props.data.attributes.content}
            </p>
            <b>

            </b>

        </div>
    )
}