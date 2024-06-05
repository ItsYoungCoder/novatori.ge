type Props = {
    title: string;
    description: string;
    color: 'red' | 'green' | 'purple' | 'aqua' | 'yellow' | 'pink';
    icon: any;
}

export default (props: Props) => {

    const classes = ['w-1/6 py-4 flex justify-center text-white rounded-xl']

    if(props.color === 'red') {
        classes.push('bg-course-color')
    } else if(props.color === 'green') {
        classes.push('bg-green')
    } else if(props.color === 'purple') {
        classes.push('bg-purple')
    } else if(props.color === 'aqua') {
        classes.push('bg-aqua')
    } else if(props.color === 'yellow') {
        classes.push('bg-yellow')
    } else if(props.color === 'pink') {
        classes.push('bg-pink')
    }

   
    return (
        <div className="rounded-md bg-white p-5">
                <div className={classes.join(' ')}>{props.icon}</div>
                <div className="font-geo mt-3">
                    <span className="text-main-color bg-white text-lg font-semibold">{props.title}</span>
                    <p className="mt-2 text-sm bg-white text-main-color">{props.description}</p>
                </div>
        </div>
    )
}