export function Icons (props){
  return(
  <ion-icon name = {props.icone}></ion-icon>
  )
}

export default function Icones(){
  return (
    <div class="icones">
    <Icons icone="paper-plane-outline"/>
    <Icons icone="compass-outline"/>
    <Icons icone="heart-outline"/>
    <Icons icone="person-outline"/>
    </div>
  )
    
}
