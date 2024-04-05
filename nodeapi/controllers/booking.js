// import { Event } from "../models/booking.js";
// import ErrorHandler from "../middlewares/error.js";

// export const createEvent = async (req, res, next) => {
//   try {
//     const eventData = req.body;
//     const event = await Event.create(eventData);
//     res.status(201).json({
//       success: true,
//       event,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// export const getEvents = async (req, res, next) => {
//   try {
//     const events = await Event.find();
//     res.status(200).json({
//       success: true,
//       events,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// export const getEventById = async (req, res, next) => {
//   try {
//     const eventId = req.params.id;
//     const event = await Event.findById(eventId);
//     if (!event) {
//       return next(new ErrorHandler("Event not found", 404));
//     }
//     res.status(200).json({
//       success: true,
//       event,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// export const updateEvent = async (req, res, next) => {
//   try {
//     const eventId = req.params.id;
//     const eventData = req.body;
//     const event = await Event.findByIdAndUpdate(eventId, eventData, {
//       new: true,
//       runValidators: true,
//     });
//     if (!event) {
//       return next(new ErrorHandler("Event not found", 404));
//     }
//     res.status(200).json({
//       success: true,
//       event,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// export const deleteEvent = async (req, res, next) => {
//   try {
//     const eventId = req.params.id;
//     const event = await Event.findByIdAndDelete(eventId);
//     if (!event) {
//       return next(new ErrorHandler("Event not found", 404));
//     }
//     res.status(200).json({
//       success: true,
//       event,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// controllers/eventController.js

import { Event } from "../models/booking.js";

// Controller to get all events
const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// // Controller to create a new event
// const createEvent = async (req, res) => {
//   const event = new Event({
//     startDate: req.body.startDate,
//     startTime: req.body.startTime,
//     endDate: req.body.endDate,
//     endTime: req.body.endTime,
//     committeeName: req.body.committeeName,
//     reason: req.body.reason,
//     fullDay: req.body.fullDay || false,
//     availability: req.body.availability || true,
//   });

//   try {
//     const newEvent = await event.save();
//     res.status(201).json(newEvent);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

const createEvent = async (req, res) => {
  try {
      const { startDate, startTime, endDate, endTime } = req.body;
      
      // Check availability
      const isAvailable = await checkAvailability(startDate, startTime, endDate, endTime);
      
      if (!isAvailable) {
          return res.status(400).json({ message: "Room is not available at the specified time." });
      }

      // Room is available, create event
      const event = new Event({
          startDate,
          startTime,
          endDate,
          endTime,
          committeeName: req.body.committeeName,
          reason: req.body.reason,
          fullDay: req.body.fullDay || false,
          // availability: true, // Set availability to true for new event
      });

      const newEvent = await event.save();
      res.status(201).json(newEvent);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
};

const checkAvailability = async (startDate, startTime, endDate, endTime) => {
  try {
      const events = await Event.find({
          startDate: startDate,
          startTime: startTime,
          endDate: endDate,
          endTime: endTime
      });

      if (events.length == 0){
        return true;}
      else false;
  } catch (err) {
      console.error("Error while checking availability:", err);
      return false;
  }
};



export { getEvents, createEvent };

