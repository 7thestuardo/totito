import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Tablero from './tablero'
import AlertProvider from '../context/AlertProvider'

const Totito = () => {
  return (
    <div className='container mx-auto '>
      <AlertProvider>
      <Tablero className="m-5 p-2" />
      </AlertProvider>
    </div>
  )
}

export default Totito