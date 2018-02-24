module.exports = {

    get: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
        console.log('params', params.item_id);

        dbInstance.read_item([params.item_id])
        .then( items => res.status(200).send( items ) )
        .catch( () => res.status(500).send() );
    },
    getAll: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        console.log('getting all')

        dbInstance.read_items()
        .then( items => res.status(200).send( items ) )
        .catch( () => res.status(500).send() );
    },
    
    update: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params, query } = req;
        const { item_name, price, image_url, bin_id, item_id } = req.body
        const id = params.item_id + params.bin_id;
        console.log( item_name, params.item_id, params.bin_id);
        

        dbInstance.update_item([params.bin_id, params.item_id, item_name, price, image_url])
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
    },

    delete: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
        console.log('params', params.item_id);

        dbInstance.delete_item(params.item_id)
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
    },

    new: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { item_name, price, image_url, bin_id } = req.body
        console.log('req.body', req.body)
        
        dbInstance.create_item([item_name, price, image_url, bin_id])
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
    }

} 
