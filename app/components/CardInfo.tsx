type Props = {
    title: string;
    description: string;
}
export default (props: Props) => {
    return (
        <div className="w-1/1 p-5 rounded-lg">
                <div className="inline-block py-3 px-4 bg-course-color rounded-xl text-white">W</div>
                <div className="font-geo mt-3">
                    <span className="font-medium text-main-color text-lg">{props.title}</span>
                    <p className="mt-2 text-sm text-main-color">{props.description}</p>
                </div>
        </div>
    )
}