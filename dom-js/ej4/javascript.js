        let attempts = 0;
        let randomNum = Math.floor(Math.random() * 6);
        console.log(randomNum);

        const calculateSecretNumber = () => {
            const userNumber = Number(document.querySelector('#number').value);
            const result = document.querySelector('#result');

            if (isNaN(userNumber) || userNumber < 0 || userNumber > 5) {
                result.value = 'El número ingresado debe estar entre 0 y 5';
            } else {
                if (attempts < 3) {
                    attempts++;
                    if (userNumber === randomNum) {
                        result.value = '¡Has acertado!';
                    } else {
                        result.value = 'Has fallado, llevas ' + attempts + ' intentos';
                    }
                } else {
                    alert('¡Has perdido! Se acabaron tus intentos.')
                }
            }
        }
        document.querySelector('#btn').addEventListener('click', calculateSecretNumber);