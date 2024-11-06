//Registro de usuario
document.addEventListener('DOMContentLoaded', () => {
    async function handleRegister(e) {

        e.preventDefault();

        const nombres = document.getElementById('nombres').value;
        const apellidos = document.getElementById('apellidos').value;
        const correo_electronico = document.getElementById('correo_electronico').value;
        const ciudad = document.getElementById('ciudad').value;
        const nombre_usuario = document.getElementById('nombre_usuario').value;
        const contrasena = document.getElementById('contrasena').value;
        

        try {
            const res = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nombres, apellidos, correo_electronico, ciudad, nombre_usuario, contrasena })
            });

            const data = await res.json()
            if (res.status === 200) {
                alert('Registro Exitoso')
            } else {
                alert(`Error al registrar ${data.msg}`)
            }
        }catch(error){
            console.error(error)
            alert('Error de registro de usuario')
        }
    }

    document.getElementById('registerform').addEventListener('submit', handleRegister)

})
