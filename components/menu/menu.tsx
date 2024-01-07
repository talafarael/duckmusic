import { MenuList } from "../menulist";
const navItem=[
    { link:'/',page:'Home'},
    { link:'/search',page:'Search'}
    ]
const Menu = () => {
    return (
     <div>
       < MenuList navLinks={navItem} />
     </div>
    );
  };
  
  export { Menu };