 const calculate = () => {
            const clientName = document.querySelector('#clientName').value;
            console.log(clientName)

            const materialCajas = document.querySelector('#materialCajas').value
            console.log(materialCajas)

            const tamañoCajas = document.querySelector('[name=rBtn]:checked').value;
            console.log(tamañoCajas)

            const comentarios = document.querySelector('#comentarios').value;
            console.log(comentarios)

            const message = `${clientName} ha pedido una caja de ${materialCajas} ${tamañoCajas} y ${comentarios}`
            console.log(message)
            document.querySelector('#result').value = message
        }
        document.querySelector('#btn').addEventListener('click', calculate);