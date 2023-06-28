import MeetupDetail from "../../components/meetups/MeetupDetail";

const Test = () => {
    return <MeetupDetail 
        image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg'
        title='First Meetup'
        address='Some Street 5, Some City'
        description='This is a first meetup'
    />
}

export const getStaticPaths = async () => {
    return {
        fallback: false,
        paths: [
        {
            params: {
                meetupId: 'm1'
            },
        },
        {
            params: {
                meetupId: 'm2'
            }
        }
        ]
    }
}

export const getStaticProps = async (context) => {

    const id = context.params.meetupId;
    console.log(id);

    return {
        props: {
            meetupData: {
                image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
                title:"some title",
                address:"some address",
                description:"some description",
                id: id
            }
        }
    }
}
export default Test;