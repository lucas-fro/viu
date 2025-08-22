import Image from "next/image";
import "./header.css";
import Link from "next/link";

export function Header() {
  return (
    <header className="header">
        <div>
            <Link href="/">
                <Image src="/logo.png" alt="Logo" width={100} height={100}/>
            </Link>
        </div>
        <nav className="navBtns">
            <Link href="/login">
                <button className="button-p">login</button>
            </Link>
            
            <Link href="/cadastro">
                <button className="button-p">cadastrar</button>
            </Link>
        </nav>
    </header>
  );
}