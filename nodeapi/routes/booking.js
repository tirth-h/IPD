// import express from "express";
// import { createEvent, getEvents, getEventById, updateEvent, deleteEvent } from "../controllers/booking.js";
// import { isAuthenticated } from "../middlewares/auth.js";

// const router = express.Router();

// router.post("/events", createEvent); // Create a new event
// router.get("/events", isAuthenticated, getEvents); // Get all events
// router.get("/events/:id", isAuthenticated, getEventById); // Get a specific event by ID
// router.put("/events/:id", isAuthenticated, updateEvent); // Update a specific event by ID
// router.delete("/events/:id", isAuthenticated, deleteEvent); // Delete a specific event by ID

// export default router;

// routes/eventRoutes.js

import express from "express";
import { getEvents, createEvent } from "../controllers/booking.js";

const router = express.Router();

// GET all events
router.get("/", getEvents); 

// POST a new event
router.post("/new", createEvent);

export { router as eventRoutes };

