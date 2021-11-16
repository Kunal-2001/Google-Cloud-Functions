const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const collectionRef = admin.firestore().collection("Staff");

exports.addEmployee = functions.https.onRequest(async (req, res) => {
  try {
    const employeeData = {
      StaffName: req.body.StaffName,
      MobileNo: req.body.MobileNo,
      Role: req.body.Role,
    };

    const addedData = await collectionRef.add(employeeData);

    res.status(204);
  } catch (err) {
    res.status(500).json({ msg: "Something failed" });
  }
});

exports.deleteEmployee = functions.https.onRequest(async (req, res) => {
  try {
    const docID = req.params[0];
    const docRef = collectionRef.doc(docID);

    const deletedTimestamps = await docRef.delete();

    res.status(200).json({ msg: "Data succesfully deleted" });
  } catch (err) {
    res.status(500).json({ msg: "Failed to delete the document" });
  }
});

exports.updateEmployee = functions.https.onRequest(async (req, res) => {
  try {
    const docID = req.params[0];
    const docRef = collectionRef.doc(docID);
    const userData = req.body;

    const updatedTimestamp = await docRef.update(userData);

    res.status(200).json({ msg: "Data succesfully updated" });
  } catch (err) {
    res.status(500).json({ msg: "Failed to update the document" });
  }
});
