
// POST/ /api/new-meetup.


const handler = (req, res) => {
    console.log('this ran');
    if(req.method = 'POST') {
        const data = req.body;

        const {title, image, address, description} = data;

    }
}

export default handler;