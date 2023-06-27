const express = require("express");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const { upload } = require("../multer");
const Shop = require("../model/shop");
const Event = require("../model/event");
// const ErrorHandler = require("../utils/ErrorHandler");
// const { isSeller, isAdmin, isAuthenticated } = require("../middleware/auth");
const router = express.Router();
const fs = require("fs");

// create event
router.post(
  "/create-event",
  upload.array("images"),
  catchAsyncErrors(async (req, res, next) => {
    try {
      const shopId = req.body.shopId;
      const shop = await Shop.findById(shopId);
      if (!shop) {
        // return next(new ErrorHandler("Shop Id is invalid!", 400));
        return res.status(400).send("Shop Id is invalid!");
      } else {
        const files = req.files;
        const imageUrls = files.map((file) => `${file.filename}`);

        const eventData = req.body;
        eventData.images = imageUrls;
        eventData.shop = shop;

        const product = await Event.create(eventData);

        res.status(201).json({
          success: true,
          product,
        });
      }
    } catch (error) {
    //   return next(new ErrorHandler(error, 400));
    return res.status(400).send("Error in creating an event");
    }
  })
);

// get all events
router.get("/get-all-events", async (req, res, next) => {
  try {
    const events = await Event.find();
    res.status(201).json({
      success: true,
      events,
    });
  } catch (error) {
    // return next(new ErrorHandler(error, 400));
    return res.status(400).send("Error getting all events");
  }
});

// get all events of a shop
router.get(
  "/get-all-events/:id",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const events = await Event.find({ shopId: req.params.id });

      res.status(201).json({
        success: true,
        events,
      });
    } catch (error) {
    //   return next(new ErrorHandler(error, 400));
    return res.status(400).send("Error in getting all events of a shop");
    }
  })
);

// delete event of a shop
router.delete(
  "/delete-shop-event/:id",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const productId = req.params.id;

      const eventData = await Event.findById(productId);

      eventData.images.forEach((imageUrl) => {
        const filename = imageUrl;
        const filePath = `uploads/${filename}`;

        fs.unlink(filePath, (err) => {
          if (err) {
            console.log(err);
          }
        });
      });

      const event = await Event.findByIdAndDelete(productId);

      if (!event) {
        // return next(new ErrorHandler("Event not found with this id!", 500));
        return res.status(500).send("Event not found with this id!");
      }

      res.status(201).json({
        success: true,
        message: "Event Deleted successfully!",
      });
    } catch (error) {
    //   return next(new ErrorHandler(error, 400));
    return res.status(400).send("Error in deleting event of shop");
    }
  })
);

// all events --- for admin
// router.get(
//   "/admin-all-events",
//   isAuthenticated,
//   isAdmin("Admin"),
//   catchAsyncErrors(async (req, res, next) => {
//     try {
//       const events = await Event.find().sort({
//         createdAt: -1,
//       });
//       res.status(201).json({
//         success: true,
//         events,
//       });
//     } catch (error) {
//     //   return next(new ErrorHandler(error.message, 500));
//     return res.status(500).send("Internal error in getting all events for admin");
//     }
//   })
// );

module.exports = router;