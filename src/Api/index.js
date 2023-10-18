const sendLoginData = async (username, password, onLoginSuccess) => {
    // try {
    //     const response = await fetch('tu_url_del_servidor', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ username, password }),
    //     });

    //     if (response.ok) {
    //         const data = await response.json();
    //         return data;
    //     } else {
    //         throw new Error('Error en la solicitud.');
    //     }
    // } catch (error) {
    //     throw error;
    // }
    if (username === 'admin' && password === 'password') {
        onLoginSuccess();
        return 'Usuario y contraseña correctos.';

    } else {
        throw new Error('Usuario o contraseña incorrectos.');
    }
};

export { sendLoginData };
