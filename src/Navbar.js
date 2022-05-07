import Logo from './Logo'
import Logomobile from './Logomobile'
import Instagrammobile from './Instagrammobile';
import Pesquisa from './Pesquisa';
import Icones from './Icones';
import Iconemobile from './Iconemobile';


export default function Navbar() {
    return (

        <div class="navbar">
            <div class="container">
                <Logo />
                <Logomobile />
                <Instagrammobile />
                <Pesquisa />
                <Icones />
                <Iconemobile />
            </div>
        </div>
    )
}