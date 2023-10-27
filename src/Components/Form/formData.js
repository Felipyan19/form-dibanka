const formData = {
    Aliados: {
        Casur: {
            config: {
                backgroundImage: require('../../img/logo-casur.png'),
                title: "Casur",
                text: ["Le recuerdo nuestro punto de atención presencial en la <b>cr 7 séptima con calle 12 b 58</b> en la ciudad de Bogotá en los horarios de <b>7:30 am a 4:00 pm.</b> Y Un botón de asesoría que puede encontrar en la página web portal DiBanka.","Recuerde que hablo con ------ muchas gracias por comunicarse con nosotros.","Por último, le voy a enviar una breve encuesta para que califique el <b>servicio de atención</b> brindado en la llamada, en la cual la máxima calificación es 5."],
            },
            data: [
                {
                    title: 'Tipo de Gestión',
                    type: 'list',
                    options: ['LLAMADA ENTRANTE', 'LLAMADA SALIENTE', 'LLAMADA WEB', 'VIDEOLLAMADA', 'OPERADORES VIP','OPERADORES VIP SALIENTE','SALIENTE WEB'],
                },
                {
                    title: 'Nombre del Cliente',
                    type: 'text'
                },
                {
                    title: 'Tipo de Identificación',
                    type: 'list',
                    options: ['NIT']
                },
                {
                    title: 'Numero de Identificación',
                    type: 'text'
                },
                {
                    title: 'Telefono del Cliente',
                    type: 'text'
                },
                {
                    title: 'Celular Actualizado',
                    type: 'text'
                },
                {
                    title: 'Correo',
                    type: 'list'
                },
                {
                    title: 'Solución en el primer Contacto',
                    type: 'list',
                    options: ['SI', 'NO']
                },
                {
                    title: 'Motivo Consulta',
                    type: 'list',
                    options: [
                        "1. Como retiro o modifico un descuento",
                        "2. Como apruebo o rechazo una solicitud de crédito",
                        "3. Bloqueo por pago extemporáneo",
                        "4. Como realizo el pago de mi factura",
                        "5. Cuando abre y cierra nuevamente la plataforma",
                        "6. Como registrar un afiliado en la plataforma",
                        "7. Como solicita un crédito el afiliado",
                        "8. Bloqueo por documentos",
                        "9. Cual es mi código de descuento",
                        "10. Olvido de contraseña",
                        "11. No me llega usuario y contraseña (Operador nuevo)",
                        "12. Cuando me realizan el pago",
                        "13. No coinciden valores de libranza con el préstamo",
                        "14. Llamada caída",
                        "15. Nuevas funcionalidades de la plataforma (pregunta concepto - Recuperación de Cartera)",
                        "16. Documentos para ingreso de la plataforma",
                        "17. Sesión abierta en otro dispositivo",
                        "18. No me llega código de verificación (OTP)",
                        "19. Operación no aplicada",
                        "20. Como descargar informes",
                        "21. Consultas generales FPS",
                        "22. Descuento en cola",
                        "23. Actualización de datos",
                        "24. Error al validar información, error 500, error 400, etc.",
                        "25. Enrolado efectivo",
                        "26. Casos planillas novedades - Cargue masivo",
                        "27. Gestión Ticket",
                        "28. Devolución de llamada",
                        "29. Transferencia de llamada",
                        "30. Llamada de asesora de banco",
                        "31. Bloqueo por un Administrador",
                        "32. Que es DiBanka - Link de ingreso",
                        "33. Continuidad de descuento",
                        "34. Llamada prueba",
                        "35. Información descuento afiliado",
                        "36. No deja visualizar la Libranza",
                        "37. Información Factor por millón",
                        "38. Asesoría de creación de funcionario",
                        "39. Bloqueo por Pagaduría",
                        "40. Inconsistencia con los códigos",
                        "41. Quiero actualizar mis códigos",
                        "42. ¿Con qué usuario ingreso a la plataforma?",
                        "43. Operador interesado en nuestros productos",
                        "44. Inconsistencias validar operaciones",
                        "45. ¿Cuándo abre y cierra la plataforma?",
                        "46. Ayuda en formato func vinculación Gobernación",
                        "47. Funcionario",
                        "48. Información bajo monto"
                    ]
                },
                {
                    title: 'Observaciones',
                    type: 'textarea'
                },
            ]
        },
        FPS: {
            config: {
                backgroundImage: require('../../img/LOGO-FONDO-DE-PASIVO-SOCIAL-768x192.png'),
                title: "FPS",
                text: ["Le recuerdo nuestro punto de atención presencial se encuentra ubicado en la Cll 19 No 14 21 en la ciudad de Bogotá los días martes y jueves en los horarios de 8:00 am a 4:30 pm.", " Recuerde que hablo con ------ muchas gracias por comunicarse con nosotros.", " Por último, le voy a enviar una breve encuesta para que califique el servicio de atención brindado en la llamada."],
            },
            data: [
                {
                    title: 'Tipo de Gestión',
                    type: 'list',
                    options: ['LLAMADA ENTRANTE', 'LLAMADA SALIENTE', 'OPERADOR VIP'],
                },
                {
                    title: 'Nombre de la entidad y el nombre del Funcionario',
                    type: 'text'
                },
                {
                    title: 'Tipo de Identificación',
                    type: 'list',
                    options: ['NIT']
                },
                {
                    title: 'Numero de Identificación',
                    type: 'text'
                },
                {
                    title: 'Telefono del Cliente',
                    type: 'text'
                },
                {
                    title: 'Celular Actualizado',
                    type: 'text'
                },
                {
                    title: 'Correo',
                    type: 'list'
                },
                {
                    title: 'Solución en el primer Contacto',
                    type: 'list',
                    options: ['SI', 'NO']
                },
                {
                    title: 'Motivo Consulta',
                    type: 'list',
                    options: [
                        "1. ¿Cómo retiro o modifico un descuento?",
                        "2. ¿Cómo apruebo o rechazo una solicitud de crédito?",
                        "3. Bloqueo por pago extemporáneo",
                        "4. Bloqueo por vinculación",
                        "5. ¿Cómo realizo el pago de la factura?",
                        "6. ¿Cuándo abre y cierra nuevamente la plataforma?",
                        "7. ¿Cómo registrar un afiliado en la plataforma?",
                        "8. ¿Cómo solicita un crédito el afiliado?",
                        "9. ¿Cuál es mi código de descuento?",
                        "10. Olvido de contraseña",
                        "11. Usuario y contraseña para el registro",
                        "12. Bloqueo de cuenta",
                        "13. Nuevas funcionalidades de la plataforma",
                        "14. ¿Qué documentos solicitan para registrarse en la plataforma?",
                        "15. Llamada caída.",
                        "16. No me llega código OTP",
                        "17. Operación no aplicada",
                        "18. ¿Cómo descargo los informes?",
                        "19. Descuento en cola",
                        "20. Actualización de datos",
                        "21. Error al validar información, error plataforma, error 403, etc.",
                        "22. Planilla de novedades",
                        "23. Llamar operador a petición de dibanka",
                        "24. Factor por Millón",
                        "25. Devolución de llamada",
                        "26. Consultas Casur",
                        "27. Transferencia a Casur",
                        "28. Llamada errada",
                        "29. Prueba de llamada",
                        "30. Afiliados San Juan de Dios",
                        "31. Actualización código de descuento",
                        "32. Descuento mesada",
                        "33. Operador interesado en nuestros productos.",
                        "34. Información descuento de afiliado"
                    ]
                },
                {
                    title: 'Observaciones',
                    type: 'textarea'
                },
            ],

        },
        Gobernacion: {
            config: {
                backgroundImage: require('../../img/LOGO-FONDO-DE-PASIVO-SOCIAL-768x192.png'),
                title: "Gobernacion",
                text: ["Le recuerdo nuestro punto de atención presencial se encuentra ubicado en la Cll 19 No 14 21 en la ciudad de Bogotá los días martes y jueves en los horarios de 8:00 am a 4:30 pm.", " Recuerde que hablo con ------ muchas gracias por comunicarse con nosotros.", " Por último, le voy a enviar una breve encuesta para que califique el servicio de atención brindado en la llamada."],
            },
            data: [
                {
                    title: 'Tipo de Gestión',
                    type: 'list',
                    options: ['LLAMADA ENTRANTE', 'LLAMADA SALIENTE','LLAMADA WEB', 'VIDEO LLAMADA', 'SALIENTE WEB'],
                },
                {
                    title: 'Nombre del Cliente',
                    type: 'text'
                },
                {
                    title: 'Tipo de Identificación',
                    type: 'list',
                    options: ['NIT']
                },
                {
                    title: 'Numero de Identificación',
                    type: 'text'
                },
                {
                    title: 'Telefono del Cliente',
                    type: 'text'
                },
                {
                    title: 'Celular Actualizado',
                    type: 'text'
                },
                {
                    title: 'Correo',
                    type: 'list'
                },
                {
                    title: 'Solución en el primer Contacto',
                    type: 'list',
                    options: ['SI', 'NO']
                },
                {
                    title: 'Pagaduria -v',
                    type: 'list',
                    options: ['GOBERNACIÓN DE CUNDINAMARCA', 'UNIDAD DE PENSIONADOS']
                },
                {
                    title: 'Motivo Consulta',
                    type: 'list',
                    options:   [
                        "1. Usuario y contraseña para registro",
                        "2. ¿Cómo apruebo o rechazo solicitud de crédito?",
                        "3. ¿Cómo retiro o modifico un crédito?",
                        "4. ¿Cómo incorporo un descuento (productos y servicios)",
                        "5. Documentos para ingreso de la plataforma",
                        "6. ¿Cómo solicita un crédito un pensionado?",
                        "7. Información descuento afiliado",
                        "8. ¿Cómo solicita un crédito el pensionado?",
                        "9. Diligenciar factor por millón"
                    ]
                },
                {
                    title: 'Observaciones',
                    type: 'textarea'
                },
            ],

        },
        Educame: {
            config: {
                backgroundImage: require('../../img/LOGO-FONDO-DE-PASIVO-SOCIAL-768x192.png'),
                title: "Educame",
                text: ["Le recuerdo nuestro punto de atención presencial se encuentra ubicado en la Cll 19 No 14 21 en la ciudad de Bogotá los días martes y jueves en los horarios de 8:00 am a 4:30 pm.", " Recuerde que hablo con ------ muchas gracias por comunicarse con nosotros.", " Por último, le voy a enviar una breve encuesta para que califique el servicio de atención brindado en la llamada."],
            },
            data: [
                {
                    title: 'Tipo de Gestión',
                    type: 'list',
                    options: ['LLAMADA ENTRANTE', 'LLAMADA SALIENTE'],
                },
                {
                    title: 'Nombre del Cliente',
                    type: 'text'
                },
                {
                    title: 'Tipo de Identificación',
                    type: 'list',
                    options: ['NIT']
                },
                {
                    title: 'Numero de Identificación',
                    type: 'text'
                },
                {
                    title: 'Telefono del Cliente',
                    type: 'text'
                },
                {
                    title: 'Celular Actualizado',
                    type: 'text'
                },
                {
                    title: 'Correo',
                    type: 'list'
                },
                {
                    title: 'Solución en el primer Contacto',
                    type: 'list',
                    options: ['SI', 'NO']
                },
                {
                    title: 'Motivo Consulta',
                    type: 'list',
                    options:  [
                        "1. Usuario y contraseña para registro",
                        "2. ¿Cómo apruebo o rechazo solicitud de crédito?",
                        "3. ¿Cómo retiro o modifico un crédito?",
                        "4. ¿Cómo incorporo un descuento (productos y servicios)",
                        "5. Temas de facturación (valor de uso de la plataforma)",
                        "6. Bloqueo por pagaduría"
                    ]
                },
                {
                    title: 'Observaciones',
                    type: 'textarea'
                },
            ],

        },
    },
    Afiliados: {
        Casur: {
            config: {
                backgroundImage: require('../../img/logo-casur.png'),
                title: "Casur",
                text: ["Le recuerdo nuestro punto de atención presencial en la cr 7 séptima con calle 12 b 58 en la ciudad de Bogotá en los horarios de 7:30 am a 4:00 pm. Y Un botón de asesoría que puede encontrar en la página web portal DiBanka.","Recuerde que hablo con ------ muchas gracias por comunicarse con nosotros.","Por último, le voy a enviar una breve encuesta para que califique el servicio de atención brindado en la llamada, en la cual la máxima calificación es 5."],
            },
            data: [
                {
                    title: 'Tipo de Gestión',
                    type: 'list',
                    options: ['LLAMADA ENTRANTE', 'LLAMADA SALIENTE', 'LLAMADA WEB', 'VIDEOLLAMADA', 'OPERADORES VIP','OPERADORES VIP SALIENTE','SALIENTE WEB'],
                },
                {
                    title: 'Nombre del Cliente',
                    type: 'text'
                },
                {
                    title: 'Tipo de Identificación',
                    type: 'list',
                    options: ['NIT']
                },
                {
                    title: 'Numero de Identificación',
                    type: 'text'
                },
                {
                    title: 'Telefono del Cliente',
                    type: 'text'
                },
                {
                    title: 'Celular Actualizado',
                    type: 'text'
                },
                {
                    title: 'Correo',
                    type: 'list'
                },
                {
                    title: 'Solución en el primer Contacto',
                    type: 'list',
                    options: ['SI', 'NO']
                },
                {
                    title: 'Motivo Consulta',
                    type: 'list',
                    options: [
                        "1. Como retiro o modifico un descuento",
                        "2. Como apruebo o rechazo una solicitud de crédito",
                        "3. Bloqueo por pago extemporáneo",
                        "4. Como realizo el pago de mi factura",
                        "5. Cuando abre y cierra nuevamente la plataforma",
                        "6. Como registrar un afiliado en la plataforma",
                        "7. Como solicita un crédito el afiliado",
                        "8. Bloqueo por documentos",
                        "9. Cual es mi código de descuento",
                        "10. Olvido de contraseña",
                        "11. No me llega usuario y contraseña (Operador nuevo)",
                        "12. Cuando me realizan el pago",
                        "13. No coinciden valores de libranza con el préstamo",
                        "14. Llamada caída",
                        "15. Nuevas funcionalidades de la plataforma (pregunta concepto - Recuperación de Cartera)",
                        "16. Documentos para ingreso de la plataforma",
                        "17. Sesión abierta en otro dispositivo",
                        "18. No me llega código de verificación (OTP)",
                        "19. Operación no aplicada",
                        "20. Como descargar informes",
                        "21. Consultas generales FPS",
                        "22. Descuento en cola",
                        "23. Actualización de datos",
                        "24. Error al validar información, error 500, error 400, etc.",
                        "25. Enrolado efectivo",
                        "26. Casos planillas novedades - Cargue masivo",
                        "27. Gestión Ticket",
                        "28. Devolución de llamada",
                        "29. Transferencia de llamada",
                        "30. Llamada de asesora de banco",
                        "31. Bloqueo por un Administrador",
                        "32. Que es DiBanka - Link de ingreso",
                        "33. Continuidad de descuento",
                        "34. Llamada prueba",
                        "35. Información descuento afiliado",
                        "36. No deja visualizar la Libranza",
                        "37. Información Factor por millón",
                        "38. Asesoría de creación de funcionario",
                        "39. Bloqueo por Pagaduría",
                        "40. Inconsistencia con los códigos",
                        "41. Quiero actualizar mis códigos",
                        "42. ¿Con qué usuario ingreso a la plataforma?",
                        "43. Operador interesado en nuestros productos",
                        "44. Inconsistencias validar operaciones",
                        "45. ¿Cuándo abre y cierra la plataforma?",
                        "46. Ayuda en formato func vinculación Gobernación",
                        "47. Funcionario",
                        "48. Información bajo monto"
                    ]
                },
                {
                    title: 'Observaciones',
                    type: 'textarea'
                },
            ]
        },
        FPS: {
            config: {
                backgroundImage: require('../../img/LOGO-FONDO-DE-PASIVO-SOCIAL-768x192.png'),
                title: "FPS",
                text: ["Le recuerdo nuestro punto de atención presencial se encuentra ubicado en la Cll 19 No 14 21 en la ciudad de Bogotá los días martes y jueves en los horarios de 8:00 am a 4:30 pm.", " Recuerde que hablo con ------ muchas gracias por comunicarse con nosotros.", " Por último, le voy a enviar una breve encuesta para que califique el servicio de atención brindado en la llamada."],
            },
            data: [
                {
                    title: 'Tipo de Gestión',
                    type: 'list',
                    options: ['LLAMADA ENTRANTE', 'LLAMADA SALIENTE'],
                },
                {
                    title: 'Nombre del Cliente',
                    type: 'text'
                },
                {
                    title: 'Tipo de Identificación',
                    type: 'list',
                    options: ['Cedula de Ciudadania']
                },
                {
                    title: 'Numero de Identificación',
                    type: 'text'
                },
                {
                    title: 'Telefono del Cliente',
                    type: 'text'
                },
                {
                    title: 'Celular Actualizado',
                    type: 'text'
                },
                {
                    title: 'Tiene Correo Electronico?',
                    type: 'list',
                    options: ['SI', 'NO']
                },
                {
                    title: 'Correo Electronico',
                    type: 'list'
                },
                {
                    title: 'Solución en el primer Contacto',
                    type: 'list',
                    options: ['SI', 'NO']
                },
                {
                    title: 'Motivo Consulta',
                    type: 'list',
                    options:  [
                        "1. Solicitud de Usuario y Contraseña",
                        "2. ¿Quiero saber estado de mi solicitud de Crédito?",
                        "3. ¿Cómo solicito un Crédito, qué trámite debo hacer?",
                        "4. No me llega código OTP",
                        "5. ¿Cuál es el link de ingreso para DiBanka?",
                        "6. No deja tomar la foto",
                        "7. Bloqueo de cuenta",
                        "8. ¿Dónde actualizo mis datos y número celular?",
                        "9. Bloqueo de cuenta petición afiliado",
                        "10. Mi crédito no aparece en la plataforma",
                        "11. ¿Cómo rechazo o modifico mi crédito?",
                        "12. Olvido usuario y contraseña",
                        "13. Error al validar información, error plataforma, error 403, etc.",
                        "14. ¿Dónde descargo mi desprendible de nómina?",
                        "15. Bloqueo de seguridad",
                        "16. Firma electrónica",
                        "17. Documentos solicitados a los aliados",
                        "18. ¿Cuándo abre y cierra nuevamente la plataforma?",
                        "19. ¿Cómo paso mi crédito a descuento por nómina?",
                        "20. Cambio el cupo en la plataforma",
                        "21. ¿Cuándo me liberan o retiran mi crédito de plataforma?",
                        "22. ¿Cómo subo mis certificados en la plataforma, documentos, etc?",
                        "23. Descuento en cola",
                        "24. Me están descontando un valor diferente en mi nómina",
                        "25. ¿Deseo saber si un aliado se encuentra registrado en la plataforma?",
                        "26. Embargos y otros referentes a nómina",
                        "27. Afiliado devuelve llamada",
                        "28. Operación no aplicada",
                        "29. Libranza Erronea",
                        "30. ¿Qué es DiBanka? (punto presencial)",
                        "31. Consulta Casur",
                        "32. Llamada caída.",
                        "33. Llamada errada.",
                        "34. Devolución de llamada.",
                        "35. Gestión enrolado",
                        "36. Enrolado efectivo",
                        "37. Afiliados San Juan de Dios",
                        "38. Transferencia a Casur",
                        "39. Prueba de llamada",
                        "40. Bloqueo Representante legal"
                    ]
                },
                {
                    title: 'Observaciones',
                    type: 'textarea'
                },
            ],

        },
        Gobernacion: {
            config: {
                backgroundImage: require('../../img/LOGO-FONDO-DE-PASIVO-SOCIAL-768x192.png'),
                title: "Gobernacion",
                text: ["Le recuerdo nuestro punto de atención presencial se encuentra ubicado en la Cll 19 No 14 21 en la ciudad de Bogotá los días martes y jueves en los horarios de 8:00 am a 4:30 pm.", " Recuerde que hablo con ------ muchas gracias por comunicarse con nosotros.", " Por último, le voy a enviar una breve encuesta para que califique el servicio de atención brindado en la llamada."],
            },
            data: [
                {
                    title: 'Tipo de Gestión',
                    type: 'list',
                    options: ['LLAMADA ENTRANTE', 'LLAMADA SALIENTE','LLAMADA WEB', 'VIDEO LLAMADA', 'SALIENTE WEB'],
                },
                {
                    title: 'Nombre del Cliente',
                    type: 'text'
                },
                {
                    title: 'Tipo de Identificación',
                    type: 'list',
                    options: ['Cedula de Ciudadania']
                },
                {
                    title: 'Numero de Identificación',
                    type: 'text'
                },
                {
                    title: 'Telefono del Cliente',
                    type: 'text'
                },
                {
                    title: 'Celular Actualizado',
                    type: 'text'
                },
                {
                    title: 'Correo Institucional',
                    type: 'list'
                },
                {
                    title: 'Solución en el primer Contacto',
                    type: 'list',
                    options: ['SI', 'NO']
                },
                {
                    title: 'Pagaduria -v',
                    type: 'list',
                    options: ['GOBERNACIÓN DE CUNDINAMARCA', 'UNIDAD DE PENSIONADOS']
                },
                {
                    title: 'Motivo Consulta',
                    type: 'list',
                    options:  [
                        "1. Solicitud de Usuario y Contraseña",
                        "2. ¿Cómo solicito un Crédito, qué trámite debo hacer?",
                        "3. Enrolado efectivo",
                        "4. Llamada caida",
                        "5. Se contacta un tercero",
                        "6. Olvido usuario y contraseña",
                        "7. Link de ingreso - ¿Qué es DiBanka?",
                        "8. ¿Dónde descargo los desprendibles?"
                    ]
                },
                {
                    title: 'Observaciones',
                    type: 'textarea'
                },
            ],

        },
        Educame: {
            config: {
                backgroundImage: require('../../img/LOGO-FONDO-DE-PASIVO-SOCIAL-768x192.png'),
                title: "Educame",
                text: ["Le recuerdo nuestro punto de atención presencial se encuentra ubicado en la Cll 19 No 14 21 en la ciudad de Bogotá los días martes y jueves en los horarios de 8:00 am a 4:30 pm.", " Recuerde que hablo con ------ muchas gracias por comunicarse con nosotros.", " Por último, le voy a enviar una breve encuesta para que califique el servicio de atención brindado en la llamada."],
            },
            data: [
                {
                    title: 'Tipo de Gestión',
                    type: 'list',
                    options: ['LLAMADA ENTRANTE', 'LLAMADA SALIENTE','LLAMADA WEB', 'VIDEO LLAMADA', 'SALIENTE WEB'],
                },
                {
                    title: 'Nombre del Cliente',
                    type: 'text'
                },
                {
                    title: 'Tipo de Identificación',
                    type: 'list',
                    options: ['Cedula de Ciudadania']
                },
                {
                    title: 'Numero de Identificación',
                    type: 'text'
                },
                {
                    title: 'Telefono del Cliente',
                    type: 'text'
                },
                {
                    title: 'Celular Actualizado',
                    type: 'text'
                },
                {
                    title: 'Correo Institucional',
                    type: 'list'
                },
                {
                    title: 'Solución en el primer Contacto',
                    type: 'list',
                    options: ['SI', 'NO']
                },
                {
                    title: 'Motivo Consulta',
                    type: 'list',
                    options:   [
                        "1. Solicitud de Usuario y Contraseña",
                        "2. ¿Cómo solicito un Crédito, qué trámite debo hacer?",
                        "3. Enrolado efectivo",
                    ]
                },
                {
                    title: 'Observaciones',
                    type: 'textarea'
                },
            ],

        },
    }
};

export default formData;





