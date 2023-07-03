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
    return <NewMeetupForm onAddMeetup={addMeetUpHandler} />
}

export default NewMeetupPage;