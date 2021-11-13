/**         IMPORTANTÍSSIMO
 * Inserção/Upload de imagem e mostrar na tela do computadorObject.
 * É útil quando queremos fazer upload de imagem. Ou seja, visualizar a imagem
 * antes de salvar ou fazer o upload.
 * Obs.: Na aula anterior utilizei o método Síncrono. Nessa aula vou utilizar o 
 * método assíncrono.
 */

function mostrar() {
    let reader = new FileReader();
    // Pegando a imagem
    let imagem = document.getElementById('imagem').files[0];

    // Usando "reader" para ler a "imagem"
    /**
     * Quando a imagem for lida, aí vai ser executado um callback
     * "onloadend" significa quando o carregamento finalizar
     */
    reader.onloadend = function () {
        let img = document.createElement('img');
        img.src = reader.result;
        img.width = 200;


        // Mostrando a imagem na tela
        document.getElementById('area').appendChild(img);
    }
    reader.readAsDataURL(imagem);
}