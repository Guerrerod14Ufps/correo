document.addEventListener('DOMContentLoaded', function() {
    const emailForm = document.getElementById('emailForm');

    emailForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            to: document.getElementById('to').value,
            subject: document.getElementById('subject').value,
            cc: document.getElementById('cc').value,
            message: document.getElementById('message').value
        };

        console.log('Datos del correo:', formData);
        
        // Simulación de envío de correo
        setTimeout(() => {
            alert('Correo enviado (simulado)');
            emailForm.reset();
        }, 1000);

        // Aquí puedes agregar código para enviar los datos a un servidor
        // Por ejemplo, usando fetch:
        /*
        fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Respuesta del servidor:', data);
            alert('Correo enviado con éxito');
            emailForm.reset();
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Error al enviar el correo');
        });
        */
    });
});