// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require("firebase-functions");

// The Firebase Admin SDK to access Firestore.
const admin = require("firebase-admin");
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.addEmployee = functions.https.onRequest(async (req, res) => {
  try {
    const employeeData = {
      StaffName: req.body.StaffName,
      MobileNo: req.body.MobileNo,
      Role: req.body.Role,
    };

    const addedData = await admin
      .firestore()
      .collection("Staff")
      .add(employeeData);

    res.status(204);
  } catch (err) {
    res.status(500).json({ msg: "Something failed" });
  }
});
