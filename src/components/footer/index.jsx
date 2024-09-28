import { FormInput } from "../FormInput";
import { Button } from "../Button";
 
import style from "./style.module.scss"; 

export const Footer = () => {

    return (
        <>
            <form className={style.form}>
                <FormInput inputName="Nome" id="nome" type="text" placeholder="Digite seu Nome!"/>
                <FormInput inputName="Email" id="email" type="text" placeholder="Digite se melhor Email!"/>
                <Button text="Enivar" type="submit"/>
            </form>
        </>
    )
}