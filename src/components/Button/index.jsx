import style from "./style.module.scss";

export const Button = ({text, ...props}) => {
    return (
        <button type={props.type}>{text}</button>
    )
}