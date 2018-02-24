module.exports = {

    getShelves: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        console.log('getting here')
    

        dbInstance.read_shelves()
        .then( shelves => res.status(200).send( shelves ) )
        .catch( () => res.status(500).send() );
    }
}




