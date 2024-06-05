type Props = {
    title: number;
    description: string;
    color: 'blue' | 'aqua' | 'red';
}
export default (props: Props) => {
    const classes = ['block font-geo text-5xl font-bold flex justify-center']

    if(props.color === 'blue') {
        classes.push('text-primary-800')
    } else if (props.color === 'aqua') {
        classes.push('text-aqua')
    } else if (props.color === 'red') {
        classes.push('text-course-color')
    }
    return (
        <div className="w-1/2">
            <span className={classes.join(' ')}>{props.title}</span>
            <p className="font-geo text-sm font-bold leading-normal flex text-center m-auto">{props.description}</p>
        </div>
    )
}