'use client'
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";

type Props = {
    title: string;
    desc: string;
}

export default (props: Props) => {
    const [isOpen, setIsOpen] = useState(false)

    const onOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="border-course-color mt-5 bg-white rounded-t-md p-5" onClick={onOpen}>
            <div className="flex items-center justify-between cursor-pointer">
                {isOpen ? (
                    <span className="font-geo-sub text-primary-800 font-medium">{props.title}</span>
                ) : (
                    <span className="font-geo-sub text-main-color font-medium">{props.title}</span>
                )}
                <div className={`transform transition-transform duration-500 ${isOpen ? 'rotate-180 text-primary-800' : ''}`}>
                    <FontAwesomeIcon icon={faChevronDown} width={15} />
                </div>
            </div>
            <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
                <div className="mt-8">
                    <span className="font-geo-sub text-sub-color">{props.desc}</span>
                </div>
            </div>
        </div>
    )
}
