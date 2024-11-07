const images = [
    'images/mika1.png',
    'images/mika2.png',
    'images/mika3.png',
    'images/mika4.png',
    'images/mika5.png'
];

const buttonEmojis = [
    '🌸',  // Flor rosada
    '🌹',  // Flor roja
    '🌻',  // Flor naranja
    '🌼',  // Flor azul
    '💐'   // Ramo de flores (emoji bonito)
];

const buttonTexts = [
    'Clic a la flor',  // Descripcion inicial
    'Te entrego una flor rosada... 🌸',
    'Una flor roja, llena de pasion... 🌹',
    'Una flor naranja, como el sol... 🌻',
    'Una flor azul, calmante como el mar... 🌼',
    '¡El ramo esta completo! 💐' // Mensaje final despues del quinto clic
];

const poems = [
    '',  // Sin poema inicial
    'Un dia te dije que te iba a dar flores,\nno lo dije de broma, realmente lo habia pensado.\nBusque girasoles, pero creo que es mejor\nvariarlas de muchos colores, cada una un reflejo.\nAunque dartelas sea un poco complicado,\nen palabras, aqui esta lo que he imaginado.',
    'Primero, una flor rosada, suave y calida,\ncomo tu voz, que llena de calma el dia.\nEs un susurro que hace sonreir,\ncomo un abrazo que siempre da alegria.',
    'Luego, una flor roja, brillante y valiente,\ncomo esas bromas que sueltas sin querer.\nSiempre son tan graciosas, aunque sean raras,\ny a veces hacen reir mas de lo que crees.',
    'Ahora una flor naranja, llena de vida,\ncomo tu energia que ilumina un dia.\nEn ti vi algo especial, algo que me tiene cautivo,\nincluso siento que tengo alterados los sentidos.',
    'Una flor rosada, suave, como tu voz,\nuna roja que refleja tus bromas, con su luz.\nUna naranja que vibra con tu energia al andar,\ny una azul que te recuerde que aqui he de estar. 💐'
];

let currentIndex = 0;

// Función que oculta la pantalla de bienvenida y muestra el contenido
document.getElementById('startButton').addEventListener('click', () => {
    document.getElementById('welcomeScreen').style.display = 'none'; // Ocultar pantalla de bienvenida
    document.getElementById('content').style.display = 'block'; // Mostrar contenido de la página
});

document.getElementById('clickButton').addEventListener('click', () => {
    currentIndex++;

    // Cambiar imagen, emoji, texto y poema en funcion del numero de clics
    if (currentIndex < images.length) {
        document.getElementById('headerImage').src = images[currentIndex];
        document.getElementById('buttonDescription').innerText = buttonTexts[currentIndex];
        document.getElementById('clickButton').innerText = buttonEmojis[currentIndex];
        document.getElementById('poemText').innerText = poems[currentIndex];
    }

    // Si llegamos al ultimo clic (quinto clic), cambia el mensaje y desaparece el boton
    if (currentIndex === images.length) {
        document.getElementById('buttonDescription').innerText = '¡El ramo esta completo! 💐'; // Mensaje final
        document.getElementById('clickButton').style.display = 'none'; // Ocultar boton
        document.getElementById('restartButton').style.display = 'block'; // Mostrar el boton de reinicio
    }
});

// Boton "Ver de nuevo"
document.getElementById('restartButton').addEventListener('click', () => {
    // Resetear el estado
    currentIndex = 0;
    document.getElementById('headerImage').src = images[0];
    document.getElementById('buttonDescription').innerText = 'Clic a la flor';
    document.getElementById('clickButton').innerText = buttonEmojis[0];
    document.getElementById('poemText').innerText = '';

    // Mostrar el boton y esconder el de reinicio
    document.getElementById('clickButton').style.display = 'inline-block';
    document.getElementById('restartButton').style.display = 'none';
});
