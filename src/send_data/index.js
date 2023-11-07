/**
 * Sends data to the specified URL and handles the response.
 *
 * @param {object} data - The data to be sent.
 * @param {function} setSendtoExcel - A function to set the state of sending data to Excel.
 * @param {function} setModal - A function to set the state of the modal.
 * @param {function} setResponse - A function to set the response data.
 */
const send_data = (data,setSendtoExcel,setModal,setResponse) => {
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
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

export { send_data };