import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const Test = () => {
    const addMeetUpHandler = (enteredData) => {
        console.log(enteredData);
    }
    return <NewMeetupForm onAddMeetup={addMeetUpHandler} />
}

export default Test;