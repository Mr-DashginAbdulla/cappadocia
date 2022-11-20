import Cappadocia from  "./components/Cappadocia.svg";

export const Header = () => {
    return (
        <div>
            <img src="./assets/backgrounds/mobile-header.png" alt="" className="mobile-header" />
    <img src={Cappadocia} alt="" className="header-bg" />
    <nav>
      <div className="menu">
        <a href="#">Маршрут</a>
        <a href="#">Отель</a>
        <a href="#">Стоимость</a>
      </div>
      <div>
        <a href="#">+38(066)555-777-6</a>
      </div>
      <div className="burger-menu"><i className="fa-solid fa-bars"></i></div>
    </nav>
    <div className="Cappadocia">
      <h1>Cappadocia</h1>
    </div>
        </div>
    )
}