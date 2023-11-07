/**
 * Renders a layout component.
 *
 * @param {Object} props - The component properties.
 *   @param {ReactNode} children - The child components to render.
 * @return {ReactNode} The rendered layout component.
 */
const Layout = ({ children }) => {
    return (
      <div className='mt-5 mb-5 flex flex-col items-center'>
        {children}
      </div>
    )
  }
  
  export { Layout }