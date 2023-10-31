const send_data = (data,setSendtoExcel,setModal,setResponse) => {
    console.log(data);
    setSendtoExcel(true);
    const url = 'https://script.google.com/macros/s/AKfycbx3jVq4TbrOYMcAaXyWql-6iBHzN9wZbH66d24yEjSwcXrvi3fNQgTEFjbqDGGbnra3IQ/exec'
    
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
        console.log('Solicitud exitosa. Respuesta:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

export { send_data };