
export default function Title(props: { children: React.ReactNode }) {

    return (
        <div className="title-comp">
            <span className="line"></span>
            <h1>{props.children}</h1>
            <span className="line"></span>
        </div>
    )
}