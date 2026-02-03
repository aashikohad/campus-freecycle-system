const admin = require("firebase-admin");

// 👇 IMPORTANT: load service account file explicitly
const serviceAccount = require("./campus-freecycle-admin.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const uid = "KmON5ghdo5h9sYVjNyi2kAw5ddz2";

admin
  .auth()
  .setCustomUserClaims(uid, { admin: true })
  .then(() => {
    console.log("✅ Admin role assigned successfully");
    process.exit(0);
  })
  .catch((error) => {
    console.error("❌ Error assigning admin role:", error);
    process.exit(1);
  });
