import { Icons } from "./Icones"
function Fundo(props) {
    return (
            <ion-icon name={props.icone}></ion-icon>
        

    )
}
export default function Fundomobile(){
    return (
        <div class="fundo-mobile">
       <Fundo icone = "home"/>
       <Fundo icone = "search-outline"/>
       <Fundo  icone = "add-circle-outline"/>
       <Fundo icone = "heart-outline"/>
       <Fundo icone = "person-outline"/>
       </div>

    )
}
