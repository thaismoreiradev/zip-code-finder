

export const ZipCodeInfo = ({cep}) => (

    <div id="result" className="flex flex-col items-center p-2 rounded-sm text-white xs:text-md xs3:text-lg">
        
        <p>CEP : {cep.cep}</p>
        <p>{cep.logradouro}</p>
        <p>{cep.complemento}</p>
        <p>{cep.bairro}</p>
        <p>{cep.localidade} - {cep.uf}</p>
        
    </div>

)