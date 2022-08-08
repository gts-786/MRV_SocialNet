import { FC } from "react";
import { authSlice } from "../../../redux/AuthSlice";
import { useAppDispatch } from "../../../tools/hooks/redux";
import MyButton from "../../UI/MyButton/MyButton";
import MyInput from "../../UI/MyInput/MyInput";
import classes from "./Login.module.css"

const Login: FC = () => {
    const dispatch = useAppDispatch();
    const login = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(authSlice.actions.trueAuth());
        localStorage.setItem('auth', 'true');
    }
    return (
        <div className={classes.auth}>
            <h1 className={classes.title}>Для входа в социальную сеть введите логин и пароль</h1>
            <form onSubmit={login}>
                <MyInput type='text' placeholder='Input your test login (any)'/><br/>
                <MyInput type='password' placeholder='Input your test password (any)'/><br/>
                <p className={classes.py}></p>
                <MyButton>Log in my social network</MyButton>
            </form>
        </div>
    );
};
export default Login;