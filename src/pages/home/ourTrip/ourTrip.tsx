import leftButton from './left.png';
import rightButton from './right.png';
import ourTrip1 from './our-trip-photo.svg';
import ourTrip2 from './our-trip-photo2.png';
import ourTrip3 from './our-trip-photo3.png';

export const OurTrip = () => {
    return (
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
            <div className="img">
                <img className="second-active" src = {ourTrip1}/>
                </div>
            <img src = {leftButton} id="left-btn2"/>
            <img src = {rightButton} id="right-btn2"/>
        </div>
        </div>
    )
}