const catchAsync = require("../utils/catchAsync");

exports.authenticate = catchAsync(async (req, res) => {
  const { code } = req.body;

  // Check if it's an admin code
  if (code.startsWith("admin")) {
    // Redirect logic for admin codes
    res
      .status(200)
      .json({ status: "success", redirect: `/admin/${code.substring(5)}` });
  } else if (code.startsWith("user")) {
    // Redirect logic for admin codes
    res
      .status(200)
      .json({ status: "success", redirect: `/user${code.substring(5)}` });
  } else {
    // Redirect logic for user codes

    res.status(400).json({ status: "error", message: `something went wrong` });
  }
});
