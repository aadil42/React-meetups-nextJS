import MeetupList from '../components/meetups/MeetupList';
import {useEffect, useState} from 'react';

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!'
      },
      {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 10, 12345 Some City',
        description: 'This is a second meetup!'
      }
];

const HomePage = (props) => {
    return (
        <MeetupList meetups={props.meetups}/>
    );
}

// it has to be named getServerSideProps. It's just like  getStaticProps. But
// this will re-generate the page on each request. and you don't have to genereta the page after some spicific time like  in getStaticProps

export const getServerSideProps = async (context) => {
  // the context parameter  will have access to request and response.
  const res = context.res;
  const req = context.req;
  
  return {
    props: {
      meetups: DUMMY_DATA
    }
  }

}
/// it has to be named getStaticProps. This is a special function. It won't get to the client. In other words this function's code 
/// will never get to client side and won't run there. Instead it will run when we build our application. This funciton will provide the neccecery data
// we need in our components and then our component can't take that data and display it so it's also there in HTML code and not insert via react. It's good for 
// search engines
// export const getStaticProps = async () => {
//   return {
//     props: {
//       meetups: DUMMY_DATA
//     },
//     revalidate: 1 // this is the number of second after which the static page will be generated so the user see the latest data.
//   }
// }
export default HomePage;