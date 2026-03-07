import { ImgContainer } from "../UI/ImgContainer";
import { ChoiceCardsData } from "@/data/choiceCardData";
import { ChoiceCard } from "./ChoiceCard";

export const AboutSection = () => {
  return (
    <section className="my-4" id="about">
      <h2 className="text-sub-title font-medium">Про нас</h2>

      <div className="grid md:grid-cols-2 md:gap-6">
        <p className="text-main-text">
          В основе создания компании Naomi легла простая идея: дом — это место,
          где человек должен наполняться энергией, а не тратить её на борьбу с
          пылью. Мы начали свой путь как небольшая семейная команда,
          объединенная любовью к порядку и эстетике. Сегодня Naomi — это
          современный сервис профессионального клининга, где каждый специалист
          разделяет наши ценности: честность, внимание к деталям и искреннее
          желание помочь.
        </p>
        <ImgContainer src="/about.webp" alt="clining" classes="mx-auto mt-4" />
      </div>

      <h2 className="text-sub-title font-medium my-4">Чому обирають нас</h2>
      <ul className="flex flex-col gap-2 justify-evenly items-center text-main-text flex-wrap md:flex-row">
        {ChoiceCardsData.map((card) => (
          <ChoiceCard data={card} key={card.id} />
        ))}
      </ul>

      {/* <ChoiceCard /> */}
      {/* <ul className="flex flex-col gap-2 text-main-text">
        <li>
          Экологичность и безопасность: Мы используем только сертифицированные
          гипоаллергенные средства, безопасные для детей и домашних животных.
        </li>
        <li>
          Технологичный подход: В нашем арсенале — профессиональное оборудование
          (парогенераторы, мощные пылесосы с HEPA-фильтрами), которое позволяет
          добиваться результата там, где обычная уборка бессильна.
        </li>
        <li>
          Забота о вашем времени: Пока мы доводим поверхности до блеска, вы
          можете посвятить время семье, хобби или отдыху. Мы возвращаем вам не
          просто чистоту, а свободные часы жизни.
        </li>
      </ul> */}

      <p className="text-main-text">
        Мы не просто моем полы и протираем окна. Мы создаем пространство, в
        котором дышится легко. Для нас не существует «мелочей»: каждый угол,
        каждый плинтус и каждый сантиметр мебели проходит через строгий контроль
        качества.
      </p>
    </section>
  );
};
