import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { authSlice } from '../../redux/AuthSlice';
import { useAppDispatch } from '../../tools/hooks/redux';
import Menu from '../Menu/Menu';
import classes from './Header.module.css';

const Header: FC = () => {
    const dispatch = useAppDispatch();
    const logout = () => {
        dispatch(authSlice.actions.falseAuth());
        localStorage.removeItem('auth');
    }
    return (
        <div className={classes.header}>
            <NavLink to='/' className={classes.toMain}><div className={classes.logo}>MRV</div></NavLink>
            <div>
                <Menu/>
            </div>
            <NavLink to='/' onClick={logout}><img src="../../MRV_SocialNet/images/Exit.png" className={classes.exit}/></NavLink>
        </div>
    );
};
export default Header;