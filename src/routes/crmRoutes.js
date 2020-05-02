import {
    addNewContact,
    getContacts,
    getContactWithID,
    updateContact,
    deleteContact
} from '../controllers/crmController'

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            // middleware: express functions that have access to the request and response objects and act on them
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next()
        }, getContacts)
    
        // post endpoint - add a contact
        .post(addNewContact)
    
    app.route('/contact/:contactID')
        // get a specific contact
        .get(getContactWithID)
        // updating a specific contact
        .put(updateContact)
        // deleting a specific contact 
        .delete(deleteContact)
}

export default routes