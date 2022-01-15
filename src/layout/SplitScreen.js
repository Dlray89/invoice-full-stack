export const SplitScreen = ({ children }) => {
const [left, right] = children

    return (
        <div className="container">
            <div className="container__left" >{ left}</div>
            <div className="container__right"> {right }</div>
        </div>
    )
}