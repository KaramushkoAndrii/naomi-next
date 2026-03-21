import { ImgContainer } from "../UI/ImgContainer";
import { ChoiceCardsData } from "@/data/choiceCardData";
import { ChoiceCard } from "./ChoiceCard";

export const AboutSection = () => {
  return (
    <section className="my-4" id="about">
      <h2 className="text-sub-title font-medium py-4">Про нас</h2>

      <div className="grid md:grid-cols-2 md:gap-6">
        <p className="text-main-text">
          Naomy — це професійний клінінг у Києві, створений для тих, хто цінує
          бездоганний порядок і власний час. Наша команда фахівців дбає про
          кожен куточок вашої оселі, використовуючи лише безпечні еко-засоби та
          передові технології прибирання. Ми не просто видаляємо бруд, а
          створюємо здоровий і затишний простір для вашої родини. Довіряючи нам,
          ви отримуєте надійність, оперативність та увагу до найменших деталей.
          Naomy — ваш персональний помічник у створенні гармонії в домі. Ми
          працюємо, щоб ви насолоджувалися життям у чистоті!
        </p>
        <ImgContainer src="/about2.webp" alt="clining" classes="mx-auto mt-4" />
      </div>

      <h2 className="text-sub-title font-medium my-4">Чому обирають нас</h2>
      <ul className="flex flex-col gap-8 justify-evenly items-center md:items-baseline text-main-text flex-wrap md:flex-row lg:flex-nowrap">
        {ChoiceCardsData.map((card) => (
          <ChoiceCard data={card} key={card.id} />
        ))}
      </ul>

      <p className="text-main-text mt-4">
        Naomy — надійний клінінг у Києві та області. Поєднуємо еко-безпеку,
        технології та профі-сервіс. Ми бережемо ваш час, гарантуємо ідеальну
        чистоту та працюємо за гнучким графіком. Обирайте якість, що дарує
        затишок і вільні хвилини!
      </p>
    </section>
  );
};
