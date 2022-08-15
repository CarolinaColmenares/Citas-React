const Paciente = () => {
    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase " >Nombre: {''}
                <span className="font-normal normal-case">Hook</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase " >Propietario: {''}
                <span className="font-normal normal-case">Carol</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase " >Email: {''}
                <span className="font-normal normal-case">correo@correo.com</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase " >Fecha de Alta: {''}
                <span className="font-normal normal-case">15 de Agosto de 2022</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase " >Síntomas: {''}
                <span className="font-normal normal-case">Sólo Duerme</span>
            </p>
        </div>

    )
}

export default Paciente