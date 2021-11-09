import Image from "next/image"

export default function Header(props) {
    return(
        <div className="header">
                <h1 className="text-center">{props.title}</h1>
        </div>
    )
}