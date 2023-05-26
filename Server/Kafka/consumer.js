const kafka = require("./kafka");

async function consumeMessages() {
  const consumer = kafka.consumer({ groupId: "123456" });

  await consumer.connect();

  await consumer.subscribe({ topic: "Moive Ticket" });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        topic,
        partition,
        offset: message.offset,
        value: message.value.toString(),
      });
    },
  });
}

consumeMessages().catch((error) => {
  console.error("Error consuming messages:", error);
});
