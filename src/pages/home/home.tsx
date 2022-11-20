import fairyTale from '../../components/images/fairy-tale-photo.svg';
import ourTrip from '../../components/images/our-trip-photo.svg';

export const Home = () => {
    return (
    <main>
        <div className="fairy-tale">
        <p>Fairy tail</p>
        </div>
        <div className="first-part">
        <div className="photo">
            <div className="img">
                <img className="active-photo" src = {fairyTale} alt=""/>
                </div>
            <img src="../../../components/buttons/left.png" alt="" id="left-btn"/>
            <img src="../../../components/buttons/right.png" alt="" id="right-btn"/>
        </div>
        <div className="text-part">
            <p>
            Каппадокия - сказочная страна воздушных шаров, сырных домиков,
            разноцветных долин и волшебных рассветов! Сюда приезжают, чтобы
            увидеть природные чудеса, полетать на воздушном шаре и конечно же
            сделать миллион красивых фотографий!
            </p>
            <p>
            Участников тура ждёт профессиональная фотосессия от лучших
            фотографов Каппадокии! Ведь именно за волшебными фото на рассвете на
            фоне воздушных шаров сюда приезжают люди со всего мира!
            </p>
            <p><b>Также Вы увидите:</b></p>
            <p>
            Музей на открытом воздухе в Гёреме Ущелье Ыхлара и монастырь Селиме
            Подземные города Крепость Учхисар Зельве и Пашабаг
            </p>
            <p>и многие другие достпримечательности.</p>
            <p>
            Местная кухня — один из поводов посетить Каппадокию, здесь есть
            рестораны на любой бюджет.
            </p>
        </div>
        </div>

        <div className="second-part">
        <div className="text-side">
            <div className="our-trip">Our trip</div>

            <p className="date"><b> День 1 </b></p>
            <p className="date-text">
            Прилёт в Анкару Трансфер в Каппадокию Солёное озеро Приезд в Гёреме
            Ужин
            </p>

            <p className="date"><b>День 2 </b></p>
            <p className="date-text">
            Фотосессия Завтрак в отеле Дневной тур по Каппадокии Закат с
            панорамным видом
            </p>

            <p className="date"><b>День 3 </b></p>
            <p className="date-text">
            Полёт на воздушном шаре Завтрак в отеле Экскурсии на выбор
            </p>

            <p className="date"><b>День 4</b></p>
            <p className="date-text">
            Свободное время, шоппинг Трансфер в Анкару Вылет в Киев
            </p>
            <div className="button"><a href="#"> ЗАБРОНИРОВАТЬ</a></div>
        </div>
        <div className="photo">
            <div className="img"><img className="second-active" src = {ourTrip}/></div>
            <img src="../../../components/buttons/left.png" alt="" id="left-btn2"/>
            <img src="../../../components/buttons/right.png" alt="" id="right-btn2"/>
        </div>
        </div>
    </main>
    )
}