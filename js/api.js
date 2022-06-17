import * as UI from './interfaz.js'

class API {
    constructor(artista, cancion) {
        this.artista = artista;
        this.cancion = cancion;
    }
    consultarAPI() {
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
        // Acá va el Spinner
        UI.divResultado.innerHTML = "<div style='color:white;background:red'>Loading...</div>"
        // METODO FETCH
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => {
                // console.log(resultado);
                const { lyrics } = resultado
                UI.divResultado.textContent = lyrics
            })
    }
}

export default API