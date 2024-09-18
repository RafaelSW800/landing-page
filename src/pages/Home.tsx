import { useState } from "react";
import Button from "../components/Button"
import Logo from "../assets/logo.svg"
import Close from "../assets/close.svg"
import Menu from "../assets/menu.svg"
import HeroRectangleOne from "../assets/images/HeroRectangleOne.png"
import HeroRectangleTwo from "../assets/images/HeroRectangleTwo.png"
import "../styles/button.css"
import "../styles/header.css";
import "../styles/utility.css";
import "../styles/hero.css"
import "../styles/solucoes.css"

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="" width={220} height={80} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#solution">Soluções</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricing">Preços</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>
                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>

                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#solution">Soluções</a>
                                        </li>
                                        <li>
                                            <a href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a href="#pricing">Preços</a>
                                        </li>
                                        <li>
                                            <a href="#contact">Contato</a>
                                        </li>
                                        <li>
                                            <a className="reverse-color" href="#">Login</a>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>
                </nav>
            </header>

            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleOne} alt="Retangulo um tela inicial" />
                </span>
                <img src={HeroRectangleTwo} alt="Retangulo dois tela inicial" />

                <div className="container content">
                    <p className="desktop-only"> Olá </p>
                    <h1>Um sistema novo, feito para empresas que perseguem o sucesso.</h1>
                    <p>Às vezes a escada para o sucesso começa no computador que está em cima da sua mesa. Às vezes, para solidificá-lo basta utilizar este sistema. </p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Explorar" secondary />
                        </span>
                    </div>
                </div>
            </section>

            <section id="solucao">
                <div className="container content">
                    <h1>Soluções baseadas em facilitar a vida de clínicas médicas que lidam com alta demanda.</h1>
                    <div className="solution-cards flex">
                        <div id="box-solucoes">
                            <h3>Sistema ágil e moderno para sua empresa.</h3>
                        </div>
                        <div id="box-solucoes">
                            <h3>Sistema atualizado regularmente para evoluir junto de sua empresa.</h3>
                        </div>
                        <div id="box-solucoes">
                            <h3>Leveza e fluidez para todos os computadores.</h3>
                        </div>
                    </div>

                    <div className="flex gap-1 content">
                        <span className="desktop-only">
                            <Button text="Veja como funciona" secondary />
                        </span>
                    </div>
                </div>
            </section>
        </>


    )
}