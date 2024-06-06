'use client'


type Props = {
    title: string;
    desc: string;
    icon: any;
    color: 'pink' | 'red' | 'green';
}
export default (props: Props) => {
    const classes = ['py-7 px-6 text-lg rounded-full border-course-color bg-sub-back']


    if(props.color === 'pink') {
        classes.push('text-pink')
    } else if (props.color === 'red') {
        classes.push('text-course-color')
    } else if (props.color === 'green') {
        classes.push('text-green')
    }
    return (
        <div className="bg-white py-6 rounded-md">
            <div className="flex justify-center py-3">
            <span className={classes.join(' ')}>{props.icon}</span>
            </div>
            <span className="flex justify-center font-geo-sub font-bold text-main-color">{props.title}</span>
            <p className="flex justify-center font-geo text-center font-light text-1xl text-sub-color">{props.desc}</p>
        </div>
    )
}