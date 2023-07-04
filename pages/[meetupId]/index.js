import { MongoClient, ObjectId } from 'mongodb';

import MeetupDetail from "../../components/meetups/MeetupDetail";
import Head from 'next/head';
import { Fragment } from 'react';

const Test = (props) => {

    return (
        <Fragment>

            <Head>
                <title>{props.meetupData.title}</title>
                <meta name="description" content={props.meetupData.description} />
            </Head>

            <MeetupDetail 
            image={props.meetupData.image}
            title={props.meetupData.title}
            address={props.meetupData.address}
            description={props.meetupData.description}
            />
        </Fragment>
    )
}

export const getStaticPaths = async () => {

    const client = await MongoClient.connect('mongodb+srv://user-1:fsIOIOQEJWlncaa@cluster1.cwx9jhy.mongodb.net/');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();

    client.close();

    return {
        fallback: 'blocking',
        paths: meetups.map((meetup) => {
        return  {
                    params: {meetupId: meetup._id.toString()}
                };
        })
    }
}

export const getStaticProps = async (context) => {

    const id = context.params.meetupId;

    const client = await MongoClient.connect('mongodb+srv://user-1:fsIOIOQEJWlncaa@cluster1.cwx9jhy.mongodb.net/');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const selectedMeetup = await meetupsCollection.findOne({
        _id: new ObjectId(id)
    });

    client.close();
    return {
        props: {
            meetupData: {
                image: selectedMeetup.image,
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                description: selectedMeetup.description,
                id: selectedMeetup._id.toString()
            }
        }
    }
}
export default Test;