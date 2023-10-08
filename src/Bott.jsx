const Bott = ({n,classDe0}) => {
  return(
    <>
      <div className={classDe0+' text-center'}> 
        <button className='bg-green-700 px-4 py-3 my-1 rounded text-2xl text-white font-bold hover:opacity-75'>
          {n}
        </button>

      </div>
    </>
  )
}

export default Bott