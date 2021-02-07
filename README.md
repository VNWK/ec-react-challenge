# React Challenge EC - Victor Castillo

### continuación una lista de los commits realizados y su explicación

- first commit
    Instale create-react-app y comencé por organizar el proyecto
- added CSS reset
    Cree un archivo para hacer un reset del CSS, normalize no funcionó como esperaba
- implementado layout header y logo
- implementado layout/Footer
- Ajuste padding header
- ajuste padding footer
- implementado wrapper contenido
    Cree los elementos que servirian de base para la app, header, footer y content. Implemente varios fixes y cambios
- implementado react-router
- inicializado routing
  Comence a desarrollar las rutas que se utilizarán, bajo el esquema de screens como vistas que implementan los componentes
- padding content
- ajuste content min-height
  Ajustes de CSS segun diseño
- agregada pantalla suscripcion
- importado fuentes EC
  El screen de suscripcion segun diseño. Solo implementé bloques generales y creé una interfaz similar a la del comercio
- plans constant imatar API data
- updated plans constant structure
- agregado plan details
  Estructura de datos fascimil de lo que podría traer desde una API
- vista datos y formulario
- agregado planSummary pagina datos
  Inicializado vista de datos y creado el formulario y el footer del plan, solo la visualización, la funcionalidad luego
  
- Vista Confirmacion
- checkmark layout
- fix contenido llene todo espacio
- implementado componente confirmacion
 Agregado la vista de confirmacion y sus componentes correspondientes
- navegacion inicial
- navegacion inicial entre rutas
 Comienzo a agregar funcionalidad, navegacion desde la pantalla suscripcion a la de datos. Para continuar a la siguiente necesito implementar el estado donde manipular la data y validar el form
- inicializacion context app
Comienzo por crear el estado general de la app, usando el hook useContext en lugar de Redux como se solicitó. Maneja los datos de la app globalmente, sera partido en dos secciones a futuro.
- conectado appContext con subscripcion
Conecto la primera pantalla ocn el context, se puede cambiar de plan y la pantalla refleja los datos segun criterio del diseño.
- implementado formContext
Se separa el estado de la app en dos, app que se encarga de los datos del form (incluyendo un mock fetch de los datos del plan), y el form, que maneja los datos de los input del form, errores, getters y setters de la data
- form validacion y simulacro enviar data
Generado la validacion de la data en una funcion utilitaria, retorna un array de errores segun key del input del formulario. Funcion manual, chequea cada field individualmente segun variados criterios.
- implementado switchplan context
funcion para cambiar de plan implementada en el context en lugar del componente
- cambiado plan switcher
conectado componente con funcion del context
- conectado plan summary context
plan summary en datos conectado con estado del app context, data actualizada segun estado 
- corregido precio boton form context
  precio del boton del form segun estado
- conectado confirmacion con context
 plan, precio y nombre desde el estado


 ### Mejoras posibles
- Implementar bloqueos de navegacion, un usuario no debe acceder a datos o confirmacion sin venir de las vistas anteriores.
- Mejorar performance validacion
- Implementar tests (falta de tiempo)
- Mejorar performance global (Implementar useCallback/useMemo)
- Mejoras de diseño