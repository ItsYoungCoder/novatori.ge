'use client'
type Props = {
    title1: string;
    title2: string;
    desc: string;
}
export default (props: Props) => {
    return (
            <div className="border-course-color mt-40 w-2/3 m-auto">
                <span className="font-geo text-4xl text-main-color flex justify-center font-bold"><span className="text-primary-800 mr-2 font-normal">{props.title1} </span>{props.title2}</span>

                <div className="flex justify-center font-geo-sub text-sub-color mt-2">
                   <p>{props.desc}</p>
                </div>

            </div>
    )
}