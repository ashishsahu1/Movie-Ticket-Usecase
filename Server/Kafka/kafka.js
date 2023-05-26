const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "your-client-id",
  brokers: ["localhost:9092"], // Specify the Kafka broker(s) you want to connect to
});

module.exports = kafka;
