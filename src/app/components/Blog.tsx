import Image from "next/image"
import main_image from "../assets/main.png"




export default function Blog(){
    return <div className="card">
        <div className="card__image">
            <Image src={main_image} />
        </div>
    </div>
}