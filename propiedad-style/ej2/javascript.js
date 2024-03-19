// 1.Ejercicio: cuestionario

// Al pulsar el botón de Ver resultado, deben iluminarse las palabras correspondientes a las respuestas a la pregunta.

//     Nota: un elemento «span» es una capa(div) alineada con el texto.


const printWindow = () => {
    let color = document.querySelector('#colors').value
    document.querySelector('body').style.backgroundColor = color
}

document.querySelector('#colors').addEventListener('change', printWindow) 