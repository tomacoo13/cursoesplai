        const pagina = location.href
        const finalDePagina = pagina.lastIndexOf('/')      
        const page = pagina.substring(finalDePagina + 1)
        console.log(page)