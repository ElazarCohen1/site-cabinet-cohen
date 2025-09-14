export default function Title(props) {
    const { text, className }  = props;
    return (
        <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-7xl  ${className}`}>
        {text}
        </h2>
    );
}
