export function InfoGroup() {
    return (
        <div className="configInfoGroup">   
            <form className="formConfigInfoGroup">
                <label htmlFor="">
                    Nome do Grupo:
                    <input type="text" className="inputInfo" />
                </label>

                <label htmlFor="">
                    Intervalo:
                    <select name="intervalo" id="intervalo" className="inputInfo">
                        <option value="5">5s</option>
                        <option value="10">10s</option>
                    </select>
                </label>
                <button className="button-salvar" type="button">salvar</button>
            </form>
        </div>
    );
}