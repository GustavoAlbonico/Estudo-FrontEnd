import Button from "../Button/Button";
import "./ImcTable.css";

const ImcTable = ({ data, imc, info, infoClass, resetCalc }) => {
  return <div id="resultContainer">
    <p id="imcNumber">
        Seu Imc:
        <span className={infoClass}> {imc}</span>
    </p>
    <p id="imcInfo">
        Situação Atual:
        <span className={infoClass}> {info}</span>
    </p>
    <h3>Confira as classificações</h3>
    <div id="imcTable">
        <div className="table-header">
            <h4>IMC</h4>
            <h4>Classificação</h4>
            <h4>Obesidade</h4>
        </div>
        {data.map((item) => (
            <div className="table-data" key={item.info}>
                <p>{item.classification}</p>
                <p>{item.info}</p>
                <p>{item.obesity}</p>
            </div>
        ))}
    </div>
    <Button id="back-btn" text="Voltar" action={resetCalc}/>
  </div>
}

export default ImcTable