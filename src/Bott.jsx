const Bott = ({n,classDe0,cambiarResultado}) => {
  return(
    <>
      <div className={classDe0+' text-center'}> 
        <button onClick={() => cambiarResultado(n)} className=' bg-naranja px-4 py-3 my-2 w-5/6 h-5/6 rounded-lg text-7xl text-white font-bold hover:opacity-75'>
          {n}
        </button>
      </div>
    </>
  )
}

export default Bott