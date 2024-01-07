import { InputHeader } from '../Header/InputHeader';
import { Profile } from '../Header/Profile';
import { Logo } from '../Header/logo';
import './style.css';

const Header = () => {
    return (
        <header className="headContainer">
            <Logo />
            <InputHeader />
            <Profile />
        </header>
    );
};

export { Header };
