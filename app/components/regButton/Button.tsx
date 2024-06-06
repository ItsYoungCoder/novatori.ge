type Props = {
    title: string;
}
export default (props: Props) => {
    return (
        <div className="flex justify-center">
            <button className="bg-primary-800 px-7 py-3 font-geo-sub rounded-lg text-white font-medium">{props.title}</button>
        </div>
    )
}