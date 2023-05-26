const chai = require("chai");
const expect = chai.expect;

// Import the module that contains the functions to be tested
const movieTicketBooking = require("./movieTicketBooking");

describe("Movie Ticket Booking App", () => {
  describe("calculateTotalCost", () => {
    it("should calculate the total cost correctly for a single ticket", () => {
      const ticket = {
        movie: "Avengers: Endgame",
        time: "18:00",
        date: "2023-05-28",
        seat: "A1",
        price: 10,
      };

      const totalCost = movieTicketBooking.calculateTotalCost([ticket]);
      expect(totalCost).to.equal(10);
    });

    it("should calculate the total cost correctly for multiple tickets", () => {
      const tickets = [
        {
          movie: "Avengers: Endgame",
          time: "18:00",
          date: "2023-05-28",
          seat: "A1",
          price: 10,
        },
        {
          movie: "Spider-Man: No Way Home",
          time: "20:30",
          date: "2023-05-28",
          seat: "B3",
          price: 12,
        },
        {
          movie: "Black Widow",
          time: "16:30",
          date: "2023-05-29",
          seat: "C5",
          price: 8,
        },
      ];

      const totalCost = movieTicketBooking.calculateTotalCost(tickets);
      expect(totalCost).to.equal(30);
    });
  });

  describe("isTicketAvailable", () => {
    it("should return true if the ticket is available", () => {
      const ticket = {
        movie: "Avengers: Endgame",
        time: "18:00",
        date: "2023-05-28",
        seat: "A1",
        price: 10,
      };

      const isAvailable = movieTicketBooking.isTicketAvailable(ticket);
      expect(isAvailable).to.be.true;
    });

    it("should return false if the ticket is not available", () => {
      // Create a ticket that is already booked or unavailable
      const ticket = {
        movie: "Avengers: Endgame",
        time: "18:00",
        date: "2023-05-28",
        seat: "A1",
        price: 10,
        booked: true,
      };

      const isAvailable = movieTicketBooking.isTicketAvailable(ticket);
      expect(isAvailable).to.be.false;
    });
  });
});
