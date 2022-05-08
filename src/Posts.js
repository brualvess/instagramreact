import { Icons } from "./Icones"

function Post(props) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.image} />
                    {props.name}
                </div>
                <div class="acoes">
                    <Icons icone="ellipsis-horizontal" />
                </div>
            </div>

            <div class="conteudo">
                <img src={props.photo} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <Icons icone="heart-outline" />
                        <Icons icone="chatbubble-outline" />
                        <Icons icone="paper-plane-outline" />
                    </div>
                    <div>
                        <Icons icone="bookmark-outline" />
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.foto} />
                    <div class="texto">
                        Curtido por <strong>{props.usuario}</strong> e <strong>{props.qtdCurtida}</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default function Posts() {
    const post = [
        {
            image: "assets/img/meowed.svg",
            name: "meowed",
            photo: "assets/img/gato-telefone.svg",
            foto: "assets/img/respondeai.svg",
            usuario: "respondeai",
            qtdCurtida: "outras 101.523 pessoas"
        },
        {
            image: "assets/img/barked.svg",
            name: "barked",
            photo: "assets/img/dog.svg",
            foto: "assets/img/adorable_animals.svg",
            usuario: "adorable_animals",
            qtdCurtida: "outras 99.159 pessoas"
        }
    ]
    const usuario = post.map(item => <Post image={item.image} name={item.name} photo={item.photo} foto={item.foto} 
        usuario={item.usuario} qtdCurtida={item.qtdCurtida}/>)
    return (
        <div class="posts">
         {post.map(item => <Post image={item.image} name={item.name} photo={item.photo} foto={item.foto} 
        usuario={item.usuario} qtdCurtida={item.qtdCurtida}/>)}
        </div>
    )
}