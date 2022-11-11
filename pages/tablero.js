import { useContext, useState } from "react"
import { AlertContext } from "../context/AlertProvider"
import Cuadro from "./cuadro"


const Tablero = () => {
  const [cuadros, setCuadros] = useState(Array(9).fill(''))
  const [turno, setTurno] = useState('X')
  const posiciones1 = []
  
  const alert = useContext(AlertContext)

  const pintarFigura = (indexItem) => {
    if (cuadros[indexItem] !== '' ){
      alert.show('Tablero','El cuadro ya tiene valor y no puede ser cambiado')
      return;
    }else if (calculaGanador(cuadros) !== ''){
      return;
    }else {
    const misCuadritos = cuadros.slice()
    misCuadritos.splice(indexItem, 1, turno)
    setCuadros(misCuadritos)
    
    if(turno === 'X'){
      setTurno('O')
    }
    else{
      setTurno('X')
    }
    
  }
}

  const calculaGanador = (mytablero) => {
    const jugadasGanadoras = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let indiceJugada = 0; indiceJugada < jugadasGanadoras.length; indiceJugada++){
      const [a, b ,c] = jugadasGanadoras[indiceJugada];
      if (mytablero[a] && mytablero[a] === mytablero[b] && mytablero[a] === mytablero[c]){   
      colorGanador(jugadasGanadoras[indiceJugada])
      return mytablero[a]
      }
    }
    return '';
  };
  
  const colorGanador = (posicion) => {
    posiciones1 = posicion
    }

  const reiniciar = () => {
    setCuadros(Array(9).fill(''));
    setTurno("X");
  }

  return(
    
    <div className="min-h-screen bg-slate-800 text-center">
      <h1 className="mb-8 text-8xl font-extrabold text-neutral-50 ">TOTITO</h1>
        <span className="text-neutral-50 text-3xl">{'El ganador es: ' + calculaGanador(cuadros)}</span>
        <br/>
        <br/>
        <div className = "grid grid-custom content-center justify-center gap-1  ">
          {
            cuadros.map((item, indexItem) => {
              return <Cuadro 
                        key={indexItem}
                        valor={item}
                        ganadores={posiciones1.includes(indexItem)}
                        alHacerClick={() => pintarFigura(indexItem)}
                      />
            })
          } 
        </div>
        <button className="mt-6 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={reiniciar}>
          Reiniciar Juego
        </button>
    </div>
      
  )

}

export default Tablero