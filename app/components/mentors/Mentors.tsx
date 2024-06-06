'use client'

import Link from "next/link";

type Props = {
    image: any;
    title: string;
    desc: string;
    mentor: string;
    otherMentor: string;
    info: string;
    price: string;
}
export default (props: Props) => {
    return (
                <div className="border-green flex-1">
                    <div className="border-course-color w-11/12 translate-y-2 bg-white rounded-lg p-5 hover:translate-y-0 transition delay-75 ease-in-out">
                        <Link href='/auth/signup'>
                            <div>
                                <img src={props.image} className="rounded-lg" />
                            </div>
                            <div className="font-geo mt-3">
                                <span className="text-main-color text-xl font-bold">{props.title}</span>
                                <p className="text-sub-color text-1xl">{props.desc}</p>
                            </div>
                            <div className="font-geo mt-3">
                                <span className="text-sub-color font-medium text-sm">{props.mentor} <span className="text-primary-800">{props.otherMentor}</span></span>
                            </div>
                            <div className="font-geo mt-3">
                                <span className="border py-1.5 px-2 text-1xl font-semibold rounded-lg text-course-color border-course-color">{props.info}</span>
                                <span className="border border-green py-1.5 px-2 ml-5 rounded-lg font-semibold text-green text-1xl">{props.price}</span>
                            </div>
                        </Link>
                    </div>
                </div>
    )
}