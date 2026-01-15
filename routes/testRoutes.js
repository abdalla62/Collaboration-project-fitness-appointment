const express = require("express");
const router = express.Router();
const { protect, authorize } = require("../middleware/authMiddleware");

// User, Trainer, Admin
router.get("/user", protect, (req, res) => {
  res.json({
    message: "User route accessed",
    user: req.user,
  });
});

// Trainer only
router.get(
  "/trainer",
  protect,
  authorize("trainer", "admin"),
  (req, res) => {
    res.json({
      message: "Trainer route accessed",
    });
  }
);

// Admin only
router.get("/admin", protect, authorize("admin"), (req, res) => {
  res.json({
    message: "Admin route accessed",
  });
});

module.exports = router;