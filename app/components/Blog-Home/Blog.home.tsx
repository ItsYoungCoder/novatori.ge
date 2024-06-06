'use client'

import Link from "next/link";

type Props = {
    image: any;
    title: string;
    desc: string;
}
export default (props: Props) => {
    return (
                <div className="border-green ">
                    <Link href=''>
                        <div className="border-course-color bg-white rounded-lg p-5">

                                <div className="border-course-color overflow-hidden max-h-44 rounded-lg">
                                    <img src={props.image} className="w-full " />
                                </div>

                                <div className="font-geo mt-3">
                                    <span className="text-main-color text-lg font-bold">{props.title}</span>
                                    <p className="text-sub-color text-sm">{props.desc}</p>
                                </div>

                        </div>
                    </Link>
                </div>
    )
}