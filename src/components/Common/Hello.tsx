import { FC } from "react";
import classes from "../Content/Content.module.css";

const Hello: FC = () => {
    return (
        <div>
            <h2 className={classes.hello}>Здравствуйте! 
                <br/><br/>Вы находитесь на главной странице социальной сети MRV.
                <br/><br/>Пожалуйста, выбирайте категорию.
            </h2>
        </div>
    );
};
export default Hello;