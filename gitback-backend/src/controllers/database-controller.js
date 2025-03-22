const verifyToken = require("../middleware/index");

class DatabaseController {
    async setUser (req, res) {
        const {email, pfpLink, displayName} = req.body;
        const access_token = req.cookies.access_token;

        if (!email || !pfpLink || !displayName) {
            return res.status(422).json({
                link: "Link to image is required",
                userId: "User ID is required"
            });
        }
        try {
            await verifyToken(access_token);
        } catch (e) {
            console.error('Error verifying token:', e);
            return res.status(403).json({ error: 'Unauthorized' });
        }
        try {
            const docRef = db.collection('users').doc(email);
            await docRef.set({
                email: email,
                pfpLink: pfpLink,
                displayName: displayName
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    async getUser (req, res){
        const email = req.body.email;
        const docRef = await db.collection('users').doc(email);
        const doc = await docRef.get();
        if (doc.exists) {
            console.log("Found document with Data: ", doc.data());
            res.status(200).json(doc.data());
        }
    }
}

module.exports = new DatabaseController();