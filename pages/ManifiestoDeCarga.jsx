import { useRouter } from 'next/router'
import Image from 'next/image'
import { useReducer, useState } from 'react'
import { useUser } from '../context/Context'
import { WithAuth } from '../HOCs/WithAuth'
import Layout from '../layout/Layout'
import Card from '../components/Card'
import ReactPDF from '@react-pdf/renderer';

import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


import style from '../styles/Manifesto.module.css'
import Button from '../components/Button'


function CotizacionTerrestre() {
    const { user, pdfData, setUserPdfData } = useUser()
    const router = useRouter()

    const [data, setData] = useState({})
    const [tarifa, setTarifa] = useState([""])
    const [otrosGastos, setOtrosGastos] = useState([""])
    const [incluye, setIncluye] = useState([""])


    console.log(pdfData)

    function handleEventChange(e) {
        setUserPdfData({ ...pdfData, ...{ [e.target.name]: e.target.value } })
    }
    function handlerCounter(word) {
        const newTarifa = tarifa.map(i => i)
        newTarifa.pop()
        word == "pluss" ? setTarifa([...tarifa, ...[""]]) : setTarifa(newTarifa)
    }
    function handlerCounterTwo(word) {
        const newTarifa = otrosGastos.map(i => i)
        newTarifa.pop()
        word == "pluss" ? setOtrosGastos([...otrosGastos, ...[""]]) : setOtrosGastos(newTarifa)
    }
    function handlerCounterThree(word) {
        const newIncluye = incluye.map(i => i)
        newIncluye.pop()
        word == "pluss" ? setIncluye([...incluye, ...[""]]) : setIncluye(newIncluye)
    }

    function handlerPdfButton() {
        console.log("Click")

        router.push("/PdfView")
    }
    return (
        <Layout>
            <div className={style.container}>
                <form className={style.form}>
                    <div className={style.subtitle}>COTIZACIÓN TRANSPORTE TERRESTRE</div>
                    <div className={style.containerFirstItems}>
                        <div className={style.imgForm}>
                            <Image src="/logo.svg" width="250" height="150" alt="User" />
                        </div>
                        <div className={style.firstItems}>
                            <div>
                                <h2 htmlFor="">MANIFESTO DE CARGA</h2>
                            </div>
                        </div>
                    </div>




                    <br />

                    <div className={style.items}>
                        <div>
                            <label htmlFor="">REMITENTE</label>
                        </div>
                        <div>
                            <label htmlFor="">MANISFESTO DE LA CARGA</label>
                        </div>
                        <div>
                            <input type="text" name={"NOMBRE"} onChange={handleEventChange} />
                        </div>
                        <div>
                            <input type="text" name={"CORREO"} onChange={handleEventChange} />
                        </div>
                        <div>
                            <input type="text" name={"EMPRESA"} onChange={handleEventChange} />
                        </div>
                        <div>
                            <input type="text" name={"TELEFONO"} onChange={handleEventChange} />
                        </div>
                        <div>
                            <input type="text" name={"CARGO"} onChange={handleEventChange} />
                        </div>

                        <div>
                            <input type="text" name={"CIUDAD"} onChange={handleEventChange} />
                        </div>
                        <div>
                            <input type="text" name={"CARGO"} onChange={handleEventChange} />
                        </div>

                        <div>
                            <input type="text" name={"CIUDAD"} onChange={handleEventChange} />
                        </div>



                        <div>
                            <label htmlFor="">CONSIGNARIO</label>
                        </div>
                        <div>
                            <label htmlFor="">TRANSPORTADOR</label>
                        </div>
                        <div>
                            <input type="text" name={"NOMBRE"} onChange={handleEventChange} />
                        </div>
                        <div>
                            <input type="text" name={"CORREO"} onChange={handleEventChange} />
                        </div>
                        <div>
                            <input type="text" name={"EMPRESA"} onChange={handleEventChange} />
                        </div>
                        <div>
                            <input type="text" name={"TELEFONO"} onChange={handleEventChange} />
                        </div>
                        <div>
                            <input type="text" name={"CARGO"} onChange={handleEventChange} />
                        </div>

                        <div>
                            <input type="text" name={"CIUDAD"} onChange={handleEventChange} />
                        </div>
                        <div>
                            <input type="text" name={"CARGO"} onChange={handleEventChange} />
                        </div>

                        <div>
                            <input type="text" name={"CIUDAD"} onChange={handleEventChange} />
                        </div>
                    </div>
                    <br />


                    <br />
                    <div className={style.subtitle}>DATOS DEL TRANSPORTISTA</div>
                    <br />
                    <div className={`${style.items} ${style.newStyle}`}>
                        <div>
                            <label htmlFor="">NOMBRE</label>
                            <input type="text" name={"NOMBRE"} onChange={handleEventChange} />
                        </div>
                        <div>
                            <label htmlFor="">LICENCIA</label>
                            <input type="text" name={"CORREO"} onChange={handleEventChange} />
                        </div>
                        <div>
                            <label htmlFor="">CELULAR</label>
                            <input type="text" name={"EMPRESA"} onChange={handleEventChange} />
                        </div>
                        <div>
                            <label htmlFor="">PLACA</label>
                            <input type="text" name={"TELEFONO"} onChange={handleEventChange} />
                        </div>
                        <div>
                            <label htmlFor="">TIPO DE UNIDAD</label>
                            <input type="text" name={"CARGO"} onChange={handleEventChange} />
                        </div>

                        <div>
                            <label htmlFor="">COLOR</label>
                            <input type="text" name={"CIUDAD"} onChange={handleEventChange} />
                        </div>
                        <div>
                            <label htmlFor="">MARCA</label>
                            <input type="text" name={"CARGO"} onChange={handleEventChange} />
                        </div>

                        <div>
                            <label htmlFor="">TRANSITO</label>
                            <input type="text" name={"CIUDAD"} onChange={handleEventChange} />
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className={style.subtitle}>iNFORMACION DEL SERVICIO</div>
                    <br />
                    <div className={`${style.items} ${style.newStyle}`}>
                        <div>
                            <label htmlFor="">MERCANCIA</label>
                            <input type="text" name={"NOMBRE"} onChange={handleEventChange} />
                        </div>
                        <div>
                            <label htmlFor="">TIPO DE CARGA</label>
                            <input type="text" name={"CORREO"} onChange={handleEventChange} />
                        </div>
                        <div>
                            <label htmlFor="">EMPAQUE</label>
                            <input type="text" name={"EMPRESA"} onChange={handleEventChange} />
                        </div>
                        <div>
                            <label htmlFor="">SERVICIO</label>
                            <input type="text" name={"TELEFONO"} onChange={handleEventChange} />
                        </div>
                        <div>
                            <label htmlFor="">ORIGEN</label>
                            <input type="text" name={"CARGO"} onChange={handleEventChange} />
                        </div>

                        <div>
                            <label htmlFor="">DESTINO</label>
                            <input type="text" name={"CIUDAD"} onChange={handleEventChange} />
                        </div>

                    </div>
                    <br />

                    <div className={style.subtitle}>DESCRPCION DE LA CARGA<span className={style.counterPluss} onClick={() => handlerCounter('pluss')}>+</span> <span className={style.counterLess} onClick={() => handlerCounter('less')}>-</span></div>

                    <div className={`${style.containerFirstItems2} ${style.desktop}`}>
                        <span>Nº</span>
                        <span>ITEM</span>
                        <span>DESCRIPCION</span>
                        <span>MARCA Y/O PRESINTO</span>
                        <span>CANT</span>
                        <span>PESO (Kg)</span>
                        <span>VOLUMEN (M3)</span>
                        <span>DIRECCION DE ENTREGA</span>
                    </div>
                    {
                        tarifa.map((i, index) => {
                            return (
                                <div className={`${style.inputs}`} key={index}>
                                    <input type="text" placeholder="DETALLE" />
                                    <input type="text" placeholder="FLETE UNITARIO" />
                                    <input type="text" placeholder="CANTIDAD" />
                                    <input type="text" placeholder="FLETE TOTAL" />
                                    <input type="text" placeholder="DETALLE" />
                                    <input type="text" placeholder="FLETE UNITARIO" />
                                    <input type="text" placeholder="CANTIDAD" />
                                    <input type="text" placeholder="FLETE TOTAL" />
                                </div>
                            )
                        })
                    }

                    <br />


                    <div className={style.inputsSemi}>
                        <label htmlFor="">Costo Total</label><input type="text" />
                    </div>

                    <br />



                    <div className={style.items}>
                        <div>
                            <span htmlFor="">DOCUMENTACION SOPORTE</span>
                        </div>
                        <div>
                            <span htmlFor="">iNSTRUCCIONES DEL TRANSPORTE</span>
                        </div>
                        <div>
                            <span htmlFor="">DOCUMENTO</span>
                            <span htmlFor="">NUMERO</span>
                        </div>
                        <div>
                            <input type="text" name={"EMPRESA"} onChange={handleEventChange} />
                            <input type="text" name={"EMPRESA"} onChange={handleEventChange} />
                        </div>
                        <div>
                            <input type="text" name={"EMPRESA"} onChange={handleEventChange} />
                            <input type="text" name={"EMPRESA"} onChange={handleEventChange} />
                        </div>
                        <div>
                            <input type="text" name={"EMPRESA"} onChange={handleEventChange} />
                            <input type="text" name={"EMPRESA"} onChange={handleEventChange} />
                        </div>

                        <div>
                            <input type="text" name={"EMPRESA"} onChange={handleEventChange} />
                            <input type="text" name={"EMPRESA"} onChange={handleEventChange} />
                        </div>
                        <div>
                            <input type="text" name={"EMPRESA"} onChange={handleEventChange} />
                            <input type="text" name={"EMPRESA"} onChange={handleEventChange} />
                        </div>
                    </div>
                    <br />




                    <div className={style.subtitle}>OBSERVACIONES EN ORIGEN</div>

                    <div className={style.inputsAll} >
                        <textarea type="text" />
                    </div>
                    <br />
                    <div className={style.subtitle}>OBSERVACIONES EN DESTINO</div>

                    <div className={style.inputsAll} >
                        <textarea type="text" />
                    </div>
                    <br />

                    <div className={style.inputsAll} >
                        <textarea type="text" />
                    </div>
                </form>
            </div>
            <button className={style.downloadPDF} onClick={handlerPdfButton}>
                <Image src="/download-pdf.svg" width="50" height="50" alt="User" />
            </button>
            <br />
            <br />
        </Layout>
    )
}

export default WithAuth(CotizacionTerrestre)
