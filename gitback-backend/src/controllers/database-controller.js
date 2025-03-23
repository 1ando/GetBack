const verifyToken = require("../middleware/index");
const {db} = require("../config/firebase");

async function makeFriends(user1, user2) {
    // Add a new document with a generated id.
    const collectionRef = await db.collection('friend');
    const docRef = await collectionRef.add({
        friends: [user1, user2]
    });
    console.log("Document written with ID: ", docRef.id);
}




class DatabaseController {
    
    async setUser (req, res) {
        const {email, pfpLink, displayName} = req.body;
        // const access_token = req.cookies.access_token;

        if (!email || !pfpLink || !displayName) {
            return res.status(422).json({
                link: "Link to image is required",
                userId: "User ID is required"
            });
        }
        // try {
        //     await verifyToken(access_token);
        // } catch (e) {
        //     console.error('Error verifying token:', e);
        //     return res.status(403).json({ error: 'Unauthorized' });
        // }
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
        return res.status(200).json({result : "SUCCESS"});
    }

    async getUser (req, res){
        const email = req.query.email;
        const docRef = await db.collection('users').doc(email);
        const doc = await docRef.get();
        if (doc.exists) {
            console.log("Found document with Data: ", doc.data());
            return res.status(200).json(doc.data());
        }
    }

    async sendFriendRequest (req, res) {
        const sender = req.body.sender;
        const receiver = req.body.receiver;
        const requestsRef = db.collection('friend_request').doc(receiver+sender);

        requestsRef.get()
            .then(async (docSnapshot) => {
                if (docSnapshot.exists) {
                    const duplicateRef = db.collection("friend_request").doc(receiver+sender);
                    await duplicateRef.delete()
                    await makeFriends(sender, receiver)
                } else {
                    const docRef = await db.collection('friend_request').doc(sender + receiver);
                    await docRef.set({
                        receiver: receiver,
                        sender: sender
                    });
                    console.log("Document written with ID:", docRef.id);
                }
            });
        return res.status(200).json({result: "SUCCESS"});
    }

    async acceptFriend (req, res) {
        const friend1 = req.body.friend1;
        const friend2 = req.body.friend2;
        // const access_token = req.cookies.access_token;
        // try {
        //     await verifyToken(access_token);
        // } catch (e) {
        //     console.error('Error verifying token:', e);
        //     return res.status(403).json({ error: 'Unauthorized' });
        // }
        await makeFriends(friend1, friend2);
    }

    async getFriendRequests (req, res) {
        let user = req.query.user;
        user = user.toLowerCase();
        const docRef = await db.collection('friend_request').get();
        let friends = []
        for (const doc of docRef.docs) {
            const data = doc.data();
            if (data.receiver === user) {
                friends.push(data.sender);
            }
        }
        console.log(friends);
        return res.status(200).json(friends);
    }

    async getFriends (req, res) {
        let user = req.query.user;
        user = user.toLowerCase();
        const docRef = await db.collection('friend').get();
        let friends = []
        for (const doc of docRef.docs) {
            const data = doc.data();
            console.log(data.friends[0])
            if (data.friends[0] === user) {
                console.log("Friend found");
                friends.push(data.friends[1]);
            } else if (data.friends[1] === user) {
                console.log("Friend found");
                friends.push(data.friends[0]);
            }
        }
        console.log(friends);
        return res.status(200).json(friends);
    }

    async createGroup (req, res) {
        const groupName = req.body.displayName;
        const leader = req.body.leader;
        const pictureLink = req.body.pictureLink;
        const collectionRef = await db.collection('group');
        const docRef = await collectionRef.add({
            displayName: groupName,
            leader: leader,
            pictureLink: pictureLink,
            users: [leader]
        });
        console.log("Document written with ID:", docRef.id);
        return res.status(200).json({result: "SUCCESS"});
    }

    async sendGroupRequest (req, res) {
        const sender = req.body.sender;
        const receiver = req.body.receiver;
        const group_id = req.body.group_id;
        const requestsRef = await db.collection('group_request').get();

        for (const doc of requestsRef.docs) {
            const data = doc.data();
            if (data.receiver === receiver && data.group_id === group_id) {
                res.status(201).json({result: "This user already has a request from this group"});
            }
        }

        const collectionRef = await db.collection('group_request');
        const docRef = await collectionRef.add({
            group_id: group_id,
            receiver: receiver,
            sender: sender
        });
        console.log("Document written with ID:", docRef.id);
        return res.status(200).json({result: "Sent request to user"});
    }

    async getGroupRequests (req, res) {
        let user = req.query.user;
        user = user.toLowerCase();
        console.log(user);
        const docRef = await db.collection('group_request').get();
        let groups = []
        for (const doc of docRef.docs) {
            const data = doc.data();
            if (data.receiver === user) {
                groups.push(data.group_id);
            }
        }
        console.log(groups);
        return res.status(200).json(groups);
    }


    async makeTransactionRequest(req, res) {
        const { sender_email, target_email, amount, description, time, group_id } = req.body;
    
        try {
            const collectionRef = db.collection('transaction_request');  // No need for await here
            const docRef = await collectionRef.add({
                amount: amount,
                description: description,
                id: group_id,
                sender: sender_email,
                receiver: target_email,
                timeReceived: time
            });
    
            console.log("Transaction request created with ID:", docRef.id);
            res.status(200).json({ result: "SUCCESS" });
        } catch (e) {
            console.error("Error adding transaction request document:", e);
            res.status(500).json({ error: "Failed to add transaction request" });
        }
    }
    

    async makeTransactionLog(req, res) {
        const { sender_email, target_email, amount, description, time, group_id } = req.body;

        try {
            const collectionRef = await db.collection('transaction');
            const docRef = await collectionRef.add({
                amount: amount,
                description: description,
                id: group_id,
                sender: sender_email,
                receiver: target_email,
                timeReceived: time
            });

            console.log("Transaction log created with ID:", docRef.id);
            res.status(200).json({ result: "SUCCESS" });
        } catch (e) {
            console.error("Error adding transaction log document:", e);
            res.status(500).json({ error: "Failed to add transaction log" });
        }
    }

    async getTransactionRequests(req, res) {
        const { user_email } = req.query;
    
        try {
            const transactionRequests = [];
            const collectionRef = db.collection('transaction_request');
            const snapshot = await collectionRef.get();
    
            snapshot.forEach(doc => {
                const data = doc.data();
                if (data.receiver === user_email || data.sender === user_email) {  // Includes both sent and received transactions
                    transactionRequests.push(data);
                }
            });
    
            console.log("Transaction requests found:", transactionRequests);
            return res.status(200).json(transactionRequests);
    
        } catch (e) {
            console.error("Error retrieving transaction requests:", e);
            return res.status(500).json({ error: "Failed to retrieve transaction requests" });
        }
    }
    async getTransactionLog(req, res) {
        const { user_email } = req.query;
    
        try {
            const transactionLogs = [];
            const collectionRef = db.collection('transaction');
            const snapshot = await collectionRef.get();
    
            snapshot.forEach(doc => {
                const data = doc.data();
                if (data.receiver === user_email || data.sender === user_email) {  // Includes both sent and received transactions
                    transactionLogs.push(data);
                }
            });
    
            console.log("Transaction Log Documents found! :", transactionLogs);
            return res.status(200).json(transactionLogs);
    
        } catch (e) {
            console.error("Error retrieving transaction logs:", e);
            return res.status(500).json({ error: "Failed to retrieve transaction logs" });
        }
    }
    
    
}
module.exports = new DatabaseController();