
const Cuadro = ({valor, alHacerClick, ganadores}) => {

  const colorGanador = ganadores === true ? 'ganadores' : '';

  return(
    
    <button className="rounded-md text-8xl sm:text-9xl bg-cyan-400 text-center cursor-pointer hover:bg-cyan-600 h-28 w-28 sm:h-40 sm:w-40"
    
            onClick={() => alHacerClick()}
    >
    <div className={`${colorGanador}`}>{ valor }</div>
    </button>
    
  )
}

export default Cuadro