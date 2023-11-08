/**
 * Renderiza un componente de diseño.
 *
 * @param {Object} props - Las propiedades del componente.
 *   @param {ReactNode} children - Los componentes hijos a renderizar.
 * @return {ReactNode} El componente de diseño renderizado.
 */
const Layout = ({ children }) => {
  return (
    <div className='mt-5 mb-5 flex flex-col items-center'>
      {children}
    </div>
  )
}

export { Layout }
