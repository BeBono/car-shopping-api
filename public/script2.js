//Login
document.addEventListener('DOMContentLoaded', () => {

    async function handleLogin (e){
        
        e.preventDefault();

        const nombre_usuario = document.getElementById('nombre_usuario').value;
        const contrasena = document.getElementById('contrasena').value;

        try {
            const res = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nombre_usuario, contrasena })
            });

            const data = await res.json()
            if(res.status === 200){
                alert('ingreso exitoso')
            }else{
                alert(`Error ${data.msg}`)
            }
        }catch(error){
            console.error(error)
            alert('Error al inicio de sesion')
        }
    }

    document.getElementById('loginForm').addEventListener('submit', handleLogin)

})