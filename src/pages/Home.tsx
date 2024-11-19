import { useState } from "react";
import Button from "../components/Button"
import Logo from "../assets/logo.svg"
import Close from "../assets/close.svg"
import Menu from "../assets/menu.svg"
import Star from "../assets/star.svg"
import StarOuter from "../assets/starOuter.svg"
import HeroRectangleOne from "../assets/images/HeroRectangleOne.png"
import HeroRectangleTwo from "../assets/images/HeroRectangleTwo.png"
import ProfileImageOne from "../assets/images/profileImageOne.png"
import "../styles/button.css"
import "../styles/header.css";
import "../styles/utility.css";
import "../styles/hero.css"
import Champion from "../assets/champion.svg";

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

            <section className="container" id="solution">
                <header>
                    <span>
                        <h2>Soluções</h2>
                        <span className="desktop-only">
                            <h2>
                                Sob medida para você
                            </h2>
                        </span>
                    </span>
                    <p>
                        Inovação é com a gente! A <strong>DonaFrost </strong>
                        já conquistou diversos clientes, seja você mais um deles,
                        veja tudo que pode ganhar com nossos serviços.
                    </p>
                </header>
            </section>

            <section className="even-columns">
                <div className="card">
                    <span>
                        <img src={Champion} alt="ícone campeão" width={64} height={64} />
                    </span>
                    <div>
                        <h3>
                            Produto Vencedor
                        </h3>
                        <p>
                            Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage.
                        </p>
                        <hr />
                    </div>
                </div>
            </section>

            {/* Parte 4 */}

            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only">
                            Conselho de quem conhece
                        </p>
                        <h2>Cada cliente importa!</h2>
                    </span>
                    <p>
                        Quem já pediu sabe da qualidade das nossas receitas, estamos tirando aquela ideia de que
                        comida congelada tem de ser algo sem gosto, acompanhe abaixo os testemunhos de quem já comprou e aprovou.
                    </p>
                </header>
            </section>

            <section className="carousel">
                <div className="carousel-content"></div>
                <div className="carousel-card">
                <img src={ProfileImageOne} alt="Imagem perfil cliente" />
                <span className="testimony">
                    <p>
                        Certamente o mercado chinês de eletricos está bombando, só existe
                        uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço.
                    </p>
                </span>
                <span className="rating">
                    <img src={Star} alt="ícone estrela" width={22} height={20} />
                    <img src={Star} alt="ícone estrela" width={22} height={20} />
                    <img src={Star} alt="ícone estrela" width={22} height={20} />
                    <img src={Star} alt="ícone estrela" width={22} height={20} />
                    <img src={StarOuter} alt="ícone estrela sem fundo" width={20} height={22} />
                </span>
                <span className="names">
                    <p>Ellon Ma</p>
                    <p>CEO BING CHILLING</p>
                </span>
            </div>

            <div className="carousel-content">
            </div>

                


                <footer className="bg-white py-8">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between">
                        <div>
                        <img src={Logo} alt="" width={220} height={80} />
                            <div className="flex space-x-4 text-blue-600">
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-facebook"></i></a>
                                <a href="#"><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-4">Empresa</h2>
                            <ul>
                                <li className="mb-2"><a href="#" className="text-gray-700">Sobre nós</a></li>
                                <li className="mb-2"><a href="#" className="text-gray-700">Faça parte do time</a></li>
                                <li className="mb-2"><a href="#" className="text-gray-700">Blog</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-4">Funcionalidades</h2>
                            <ul>
                                <li className="mb-2"><a href="#" className="text-gray-700">Marketing</a></li>
                                <li className="mb-2"><a href="#" className="text-gray-700">Análise de dados</a></li>
                                <li className="mb-2"><a href="#" className="text-gray-700">Boot discord</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-4">Recursos</h2>
                            <ul>
                                <li className="mb-2"><a href="#" className="text-gray-700">IOS & Android</a></li>
                                <li className="mb-2"><a href="#" className="text-gray-700">Teste a Demo</a></li>
                                <li className="mb-2"><a href="#" className="text-gray-700">Clientes</a></li>
                                <li className="mb-2"><a href="#" className="text-gray-700">API</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 py-4 mt-8">
                    <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
                        Feito com amor na aula de Programação Web💙©2024 LandingPage - Todos os direitos reservados.
                    </div>
                </div>
            </footer>
            </section>
        </>
    )
}