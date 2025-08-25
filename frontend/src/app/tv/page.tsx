import Image from 'next/image';
import './tv.css';

export default function Tv() {
  return (
    <main className="backgroundTv">
      <div className="containerTv section">
        <Image src="/logo.png" alt="Logo" width={150} height={150} className="Logo"/>

        <form>
          <div className="inputGroupTv">
            <label htmlFor="codeTv" className="labelTv">Digite o código da sua mídia:</label>
            <input type="number" id="codeTv" name="codeTv" className="inputTv"/>
          </div>
          <div>
            <button type="submit" className="button-p buttonTv">Exibir Mídia</button>
          </div>
        </form>
      </div>
    </main>
  );
}