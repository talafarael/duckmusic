import { MenuList } from "../menulist";
import './style.css'
const navItem=[
    { link:'/',page:'Головна'},
    { link:'',page:''},
    { link:'/search',page:'Пошук'},
    { link:'/profile',page:'Профіль'} ,
    { link:'/playlist',page:'Плейліст'}
    ]
const Menu = () => {
    return (
     <div className="containerMenu">
       < MenuList navLinks={navItem} />
     </div>
    );
  };
  
  export { Menu };