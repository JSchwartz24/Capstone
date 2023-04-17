import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from './BookingForm.js';
import {initializeTimes, updateTimes} from "./Booking.js";
import { fetchAPI } from "./Api.js";

// test('Renders the BookingForm heading', () => {
//     render(<BookingForm />);
//     const headingElement = screen.getByText("Choose Date");
//     expect(headingElement).toBeInTheDocument();
// })

// test('initializeTimes returns a non-empty array of available booking times', async () => {
//     const times = await initializeTimes();
//     expect(Array.isArray(times)).toBe(true);
//     expect(times.length).toBeGreaterThan(0);
// });

// describe("updateTimes", () => {
//     it("should return an array based on the date that it receives", () => {
//       // Arrange
//       const availableTimes = ["17:00", "17:30", "18:00", "19:00", "21:00", "21:30", "23:30"];
//       const newSelectedDate = new Date ("Wed Apr 12 2023 00:00:00 GMT-0700 (Pacific Daylight Time)");

//       // Act
//       const result = updateTimes(availableTimes, newSelectedDate);

//       // Assert
//       expect(Array.isArray(result)).toBe(true);
//       expect(result).toEqual(availableTimes);
//     });
//   });

it('submits the form with the correct data when the Make Your Reservation button is clicked', () => {
  const handleSubmit = jest.fn(() => true);
    const availableTimes = ['17:00',
     '18:00', '19:00'];
    const { getByLabelText, getByText } = render(
      <BookingForm availableTimes={availableTimes} onSubmit={handleSubmit} />
    );

    fireEvent.change(getByLabelText('Choose Date'), { target: { value: '2023-04-15' } });
    fireEvent.change(getByLabelText('Choose Time'), { target: { value: '18:00' } });
    fireEvent.change(getByLabelText('Number of Guests'), { target: { value: '2' } });
    fireEvent.change(getByLabelText('Occasion'), { target: { value: 'Birthday' } });
    fireEvent.click(getByText('Reserve a Table'));

    expect(handleSubmit).toHaveBeenCalledWith({
      date: '2023-04-15',
      time: '18:00',
      guests: '2',
      occasion: 'Birthday',
    });
  });