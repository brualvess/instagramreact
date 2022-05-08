import { Icons } from './Icones'
function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.image} />
            </div>
            <div class="usuario">
                {props.usuario}
            </div>
        </div>
    )
}

export default function Stories() {
    const usuarios = [
        {
            image: "assets/img/9gag.svg",
            usuario: "9gag"
        },
        {
            image: "assets/img/meowed.svg",
            usuario: "meowed"
        },
        {
            image: "assets/img/barked.svg",
            usuario: "barked"
        },
        {
            image: "assets/img/nathanwpylestrangeplanet.svg",
            usuario: "nathanwpylestrangeplanet"
        },
        {
            image: "assets/img/wawawicomics.svg",
            usuario: "wawawicomics"
        },
        {
            image: "assets/img/respondeai.svg",
            usuario: "respondeai"
        },
        {
            image: "assets/img/filomoderna.svg",
            usuario: " filomoderna"
        },
        {
            image: "assets/img/memeriagourmet.svg",
            usuario: "memeriagourmet"
        },
    ]
    return (
        <div class="stories">
            {usuarios.map(item => <Story image={item.image} usuario={item.usuario} />)}
            <div class="setinha">
                <Icons icone="chevron-forward-circle" />
            </div>
        </div>
    )
}