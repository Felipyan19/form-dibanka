/**
 * Envía datos a la URL especificada y maneja la respuesta.
 *
 * @param {object} data - Los datos que se enviarán.
 * @param {function} setSendtoExcel - Una función para establecer el estado de envío de datos a Excel.
 * @param {function} setModal - Una función para establecer el estado del modal.
 * @param {function} setResponse - Una función para establecer los datos de respuesta.
 */
const send_data = (data, setSendtoExcel, setModal, setResponse) => {
    setSendtoExcel(true);
    const url = 'https://script.google.com/macros/s/AKfycbx3jVq4TbrOYMcAaXyWql-6iBHzN9wZbH66d24yEjSwcXrvi3fNQgTEFjbqDGGbnra3IQ/exec';

    fetch(url, {
        method: 'POST',
        body: new URLSearchParams(data),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Error en la solicitud.');
        }
    })
    .then(data => {
        setSendtoExcel(false);
        setModal(true);
        setResponse(data['row']);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

export { send_data };
