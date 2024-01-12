//POLIMORFISMO
//Crie uma interface GerenciadorConteudo com um método publicar().
interface GerenciadorConteudo {
    publicar(): void;
}
//Implemente esta interface em classes como GerenciadorBlog, GerenciadorVideo e GerenciadorPodcast.
//Cada implementação de publicar deve lidar com o tipo específico de conteúdo (blog, vídeo, podcast).
//Escreva uma função que aceite um GerenciadorConteudo e publique o conteúdo, demonstrando polimorfismo.
class GerenciadorBlog implements GerenciadorConteudo {
    publicar() {
        console.log("Publicando no Blog...");
    }
}
class GerenciadorVideo implements GerenciadorConteudo {
    publicar() {
        console.log("Publicando no Video...");
    }
}
class GerenciadorPodcast implements GerenciadorConteudo {
    publicar() {
        console.log("Publicando no Podcast...");
    }
}

function publicarConteudo(gerenciadorConteudo: GerenciadorConteudo) {
    gerenciadorConteudo.publicar();
}

const gerenciadorBlog = new GerenciadorBlog();
const gerenciadorVideo = new GerenciadorVideo();
const gerenciadorPodcast = new GerenciadorPodcast();
gerenciadorBlog.publicar();
gerenciadorVideo.publicar();
gerenciadorPodcast.publicar();
publicarConteudo(gerenciadorBlog);