const listaCanciones = [
    {
        titulo: "Center Mass",
        artista: "Twenty One Pilots",
        archivo: "resources/musica/CenterMass.mp3",
        portada: "resources/imagenes/CenterMass.jpg"
    },
    {
        titulo: "City Walls",
        artista: "Twenty One Pilots",
        archivo: "resources/musica/CityWalls.mp3",
        portada: "resources/imagenes/CityWalls.jpg"
    },
    {
        titulo: "Cottonwood",
        artista: "Twenty One Pilots",
        archivo: "resources/musica/Cottonwood.mp3",
        portada: "resources/imagenes/Cottonwood.jpg"
    },
    {
        titulo: "Days Lie Dormant",
        artista: "Twenty One Pilots",
        archivo: "resources/musica/DaysLieDormant.mp3",
        portada: "resources/imagenes/DaysLieDormant.jpg"
    },
    {
        titulo: "Downstairs",
        artista: "Twenty One Pilots",
        archivo: "resources/musica/Downstairs.mp3",
        portada: "resources/imagenes/Downstairs.jpg"
    },
    {
        titulo: "Drag Path",
        artista: "Twenty One Pilots",
        archivo: "resources/musica/DragPath.mp3",
        portada: "resources/imagenes/DragPath.jpg"
    },
    {
        titulo: "Drum Show",
        artista: "Twenty One Pilots",
        archivo: "resources/musica/DrumShow.mp3",
        portada: "resources/imagenes/DrumShow.png"
    },
    {
        titulo: "Intentions",
        artista: "Twenty One Pilots",
        archivo: "resources/musica/Intentions.mp3",
        portada: "resources/imagenes/Intentions.jpg"
    },
    {
        titulo: "RAW FEAR",
        artista: "Twenty One Pilots",
        archivo: "resources/musica/RAWFEAR.mp3",
        portada: "resources/imagenes/RAWFEAR.jpg"
    },
    {
        titulo: "The Contract",
        artista: "Twenty One Pilots",
        archivo: "resources/musica/TheContract.mp3",
        portada: "resources/imagenes/TheContract.png"
    }
];

const audioPlayer = document.getElementById('audioPlayer');
const btnPlay = document.getElementById('btnPlay');
const btnPause = document.getElementById('btnPause');
const selectCancion = document.getElementById('selectCancion');
const tituloCancion = document.getElementById('tituloCancion');
const artistaCancion = document.getElementById('artistaCancion');
const imgPortada = document.getElementById('imgPortada');

btnPlay.addEventListener('click', () => {
    audioPlayer.play().catch(error => {
        console.error(error);
    });
});

btnPause.addEventListener('click', () => {
    audioPlayer.pause();
});

selectCancion.addEventListener('change', (e) => {
    const indice = e.target.value;
    const cancionSeleccionada = listaCanciones[indice];

    imgPortada.src = cancionSeleccionada.portada;
    tituloCancion.textContent = cancionSeleccionada.titulo;
    artistaCancion.textContent = cancionSeleccionada.artista;

    audioPlayer.src = cancionSeleccionada.archivo;
    audioPlayer.play().catch(error => {
        console.error(error);
    });
});