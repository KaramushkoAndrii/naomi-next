export async function sendTelegramMessage(data) {
  const token = process.env.TELEGRAM_API_KEY_BOT;
  const chatIdsRaws = process.env.CHAT_ID_TOKEN;

  if (!token || !chatIdsRaws) {
    throw new Error("Змінні середовища втрачено");
  }

  const chatIds = chatIdsRaws.split(",");

  const message = `
Нова заявка з сайту!
<b>Ім'я</b>: ${data.name}
<b>Телефон:</b> ${data.tel}
<b>Послуга:</b> ${data.service}
  `;

  const requests = chatIds.map(async (id) => {
    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: id.trim(),
          text: message,
          parse_mode: "HTML",
        }),
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error(`Ошибка Telegram (ID: ${id}):`, errorData);
      throw new Error(errorData.description || "Telegram API Error");
    }

    return response.json();
  });

  return Promise.allSettled(requests);
}
