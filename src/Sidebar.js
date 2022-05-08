function Sugestoes(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.image} />
                <div class="texto">
                    <div class="nome">{props.name}</div>
                    <div class="razao">{props.razao}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}
export default function Sidebar() {
    const sugestao = [
        {
            image: "assets/img/bad.vibes.memes.svg",
            name: "bad.vibes.memes",
            razao: "Segue você"
        },
        {
            image: "assets/img/chibirdart.svg",
            name: "chibirdart",
            razao: "Segue você"
        },
        {
            image: "assets/img/razoesparaacreditar.svg",
            name: "razoespraacreditar",
            razao: "Novo no Instagram"
        },
        {
            image: "assets/img/adorable_animals.svg",
            name: "adorable_animals",
            razao: "Segue você"
        },
        {
            image: "assets/img/smallcutecats.svg",
            name: "smallcutecats",
            razao: "Segue você"
        }
    ]

    return (
        <div class="sidebar">
            <div class="usuario">
                <img src="assets/img/catanacomics.svg" />
                <div class="texto">
                    <strong>catanacomics</strong>
                    Catana
                </div>
            </div>
            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {sugestao.map(item => <Sugestoes image={item.image} name={item.name} razao={item.razao} />)}

                <div class="links">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                </div>

                <div class="copyright">
                    © 2021 INSTAGRAM DO FACEBOOK
                </div>
            </div>

        </div>
    )
}