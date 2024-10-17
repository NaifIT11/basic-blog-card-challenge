import Image from "next/image"
import main_image from "../assets/main.png"




export default function Blog(){
    return <div className="card">
        <div className="card__image">
            <Image src={main_image} />
        </div>
        <div className="card__content">
            <div className="card__content__up">
                <div className="card__content__up__badge">Learning</div>
                <div className="card__content__up__date">Published 21 Dec 2023</div>
                <div className="card__content__up__heading" role="heading" aria-level={1}>HTML & CSS Foundation</div>
                <div className="card__content__up__paragraph" role="paragraph">These languages are the backbone of every website, defining structure, content, and presentation.</div>
            </div>
            <div className="card__content__down">
                <div className="card__content__down__image"></div>
                <div className="card__content__down__name" role="heading" aria-level={4}>Greg Hooper</div>
            </div>
        </div>
    </div>
}