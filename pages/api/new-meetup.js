
import { MongoClient } from 'mongodb';

// POST/ /api/new-meetup.   

const handler = async (req, res) => {
    console.log('this ran');

    if(req.method = 'POST') {
        const data = req.body;

        const {title, image, address, description} = data;
        const client = await MongoClient.connect('mongodb+srv://user-1:fsIOIOQEJWlncaa@cluster1.cwx9jhy.mongodb.net/')
        const db = client.db();

        const meetupCollection = db.collection('meetups');
        const result = await meetupCollection.insertOne(data);

        client.close();

        res.status(201).json({message: "meetup added successfully"});
    }
}

export default handler;