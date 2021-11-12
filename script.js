/**         IMPORTANTÍSSIMO
 * Inserção/Upload de imagem e mostrar na tela do computadorObject.
 * É útil quando queremos fazer upload de imagem. Ou seja, visualizar a imagem
 * antes de salvar ou fazer o upload.
 */

function mostrar() {
    let imagem = document.getElementById('imagem').files[0];

    /** 
     * Agora que temos nosso objeto retornado pelo "files[0]", vamor gerar um link
     * a partir dele.
    */

    // Criando imagem
    let img = document.createElement('img');
    // Criando URL
    img.src = URL.createObjectURL(imagem);
    // Definindo a largura da imagem
    img.width = 200;

    // console.log(imagem);
    // Mostrando imagem
    document.getElementById('area').appendChild(img);
}