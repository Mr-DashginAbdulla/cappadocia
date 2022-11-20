import leftButton from "./left.png";
import rightButton from "./right.png";
import fairyTale1 from "./fairy-tale-photo.svg";
import fairyTale2 from "./fairy-tale-photo2.png";
import fairyTale3 from "./fairy-tale-photo3.png";

export const FairyTale = () => {
  return (
    <div>
      <div className="fairy-tale">
        <p>Fairy tail</p>
      </div>
      <div className="first-part">
        <div className="photo">
          <div className="img">
            <img className="active-photo" src={fairyTale1} />
          </div>
          <img src={leftButton} id="left-btn" />
          <img src={rightButton} id="right-btn" />
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
          <p>
            <b>Также Вы увидите:</b>
          </p>
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
    </div>
  );
};
