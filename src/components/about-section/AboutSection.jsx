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
      <ul className="flex flex-col gap-8 justify-evenly items-center md:items-baseline text-main-text flex-wrap md:flex-row lg:flex-nowrap">
        {ChoiceCardsData.map((card) => (
          <ChoiceCard data={card} key={card.id} />
        ))}
      </ul>

      <p className="text-main-text mt-4">
        Мы не просто моем полы и протираем окна. Мы создаем пространство, в
        котором дышится легко. Для нас не существует «мелочей»: каждый угол,
        каждый плинтус и каждый сантиметр мебели проходит через строгий контроль
        качества.
      </p>
    </section>
  );
};
