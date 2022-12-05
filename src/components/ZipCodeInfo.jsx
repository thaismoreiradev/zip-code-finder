

export const ZipCodeInfo = ({cep}) => (

    <div className="flex flex-col items-center bg-slate-500 p-2 rounded-sm text-white">
        <p>CEP: {cep.cep}</p>
        <p>{cep.logradouro}</p>
        <p>{cep.complemento}</p>
        <p>{cep.bairro}</p>
        <p>{cep.localidade} - {cep.uf}</p>
    </div>

)