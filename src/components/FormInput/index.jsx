import style from "./style.module.scss";

export const FormInput = ({inputName, ...props}) => {
    return (
        <section className={style.section}>
            <div className={style.input}>
                <label htmlFor={props.id}>{inputName}</label>
                <input type={props.type} placeholder={props.placeholder} />
            </div>
        </section>
        
    )
}