const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const orgCollectionRef = admin.firestore().collection("Organizations");

exports.addOrganization = functions.https.onRequest(async (req, res) => {
  try {
    const organizationName = req.body;

    const addedOrg = await orgCollectionRef.add({ Name: organizationName });

    res.status(204);
  } catch (err) {
    res.status(500).json({ msg: "Something went wrong" });
  }
});

exports.deleteOrganization = functions.https.onRequest(async (req, res) => {
  try {
    const organizationID = req.params[0];
    const organizationDocRef = orgCollectionRef.doc(organizationID);

    const deletedOrg = await organizationDocRef.delete();

    res.status(200).json({ msg: "Organization deleted" });
  } catch (err) {
    res.status(500).json({ msg: "Something went wrong" });
  }
});

exports.updateOrganization = functions.https.onRequest(async (req, res) => {
  try {
    const data = req.body;
    const organizationID = req.params[0];
    const organizationDocRef = orgCollectionRef.doc(organizationID);

    const updatedOrg = await organizationDocRef.update(data);

    res.status(200).json({ msg: "Organization updated" });
  } catch (err) {
    res.status(500).json({ msg: "Something went wrong" });
  }
});

exports.addEmployee = functions.https.onRequest(async (req, res) => {
  try {
    let params = req.params[0].split("/").splice(1);

    const employeeData = {
      StaffName: req.body.StaffName,
      MobileNo: req.body.MobileNo,
      Role: req.body.Role,
    };

    let organizationDocRef = orgCollectionRef.doc(params[0]);
    let organizationStaffRef = organizationDocRef.collection("Staff");

    const addedData = await organizationStaffRef.add(employeeData);

    res.status(204);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Something failed" });
  }
});

exports.deleteEmployee = functions.https.onRequest(async (req, res) => {
  try {
    let params = req.params[0].split("/").splice(1);

    const organizationDocRef = orgCollectionRef.doc(params[0]);
    const organizationStaffRef = organizationDocRef.collection("Staff");

    const employeeRef = organizationStaffRef.doc(params[1]);

    const deletedTimestamps = await employeeRef.delete();

    res.status(200).json({ msg: "Employee succesfully deleted" });
  } catch (err) {
    res.status(500).json({ msg: "Failed to delete the document" });
  }
});

exports.updateEmployee = functions.https.onRequest(async (req, res) => {
  try {
    let params = req.params[0].split("/").splice(1);
    const data = req.body;

    const organizationDocRef = orgCollectionRef.doc(params[0]);
    const organizationStaffRef = organizationDocRef.collection("Staff");

    const employeeRef = organizationStaffRef.doc(params[1]);

    const deletedTimestamps = await employeeRef.update(data);

    res.status(200).json({ msg: "Data succesfully updated" });
  } catch (err) {
    res.status(500).json({ msg: "Failed to update the document" });
  }
});
