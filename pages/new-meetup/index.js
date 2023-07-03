import Head from 'next/head';
import { Fragment } from 'react';

import { useRouter } from 'next/router';

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
    const route = useRouter();

    const addMeetUpHandler = async (enteredData) => {
        let response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('hehe', response);

        response = await response.json();
        // console.log(response, 'this is the  response');
        route.push('/');
        // console.log(enteredData); 
    }
    return (
        <Fragment>
            <Head>
                <title>Add a New Meetup</title>
                <meta  name='description'
                       content='Add your own meetups and create amazing networking opportunities.'/>
            </Head>
            <NewMeetupForm onAddMeetup={addMeetUpHandler} />
        </Fragment>
    );
}

export default NewMeetupPage;