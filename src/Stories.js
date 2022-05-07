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
    return (
        <div class="stories">
            <Story
                image="assets/img/9gag.svg"
                usuario="9gag"
            />
            <Story
                image="assets/img/meowed.svg"
                usuario="meowed"
            />
            <Story
                image="assets/img/barked.svg"
                usuario="barked"
            />
            <Story
                image="assets/img/nathanwpylestrangeplanet.svg"
                usuario="nathanwpylestrangeplanet"
            />
            <Story
                image="assets/img/wawawicomics.svg"
                usuario="wawawicomics"
            />
            <Story
                image="assets/img/respondeai.svg"
                usuario="respondeai"
            />
            <Story
                image="assets/img/filomoderna.svg"
                usuario=" filomoderna"
            />
            <Story
                image="assets/img/memeriagourmet.svg"
                usuario="memeriagourmet"
            />
            <div class="setinha">
                <Icons icone="chevron-forward-circle" />
            </div>
        </div>
    )
}