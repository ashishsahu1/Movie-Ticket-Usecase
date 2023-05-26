const kafka = require("./kafka");

async function produceMessage() {
  const producer = kafka.producer();

  await producer.connect();

  await producer.send({
    topic: "Movie Ticket",
    messages: [{ value: "Hello, Kafka!" }],
  });

  await producer.disconnect();
}

produceMessage().catch((error) => {
  console.error("Error producing message:", error);
});
