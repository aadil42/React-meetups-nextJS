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

const HomePage = () => {
    const [loadedData, setLoadedData] = useState([]);

    useEffect(() => {
      setLoadedData(DUMMY_DATA);
    }, []);

    return (
        <MeetupList meetups={loadedData}/>
    );
}

export default HomePage;