import mongoose from 'mongoose'
import { contactSchema } from '../models/crmModel'

const Contact = mongoose.model('Contact', contactSchema)

export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body)

    newContact.save((err, contact) => {
        if (err) {
            res.send(err)
        }
        res.json(contact)
    })
}

export const getContacts = (req, res) => {
    Contact.find({}, (err, contact) => {
        if (err) {
            res.send(err)
        }
        res.json(contact)
    })
}

export const getContactWithID = (req, res) => {
    Contact.findById(req.params.contactID, (err, contact) => {
        if (err) {
            res.send(err)
        }
        res.json(contact)
    })
}

export const updateContact = (req, res) => {
    // new: true - to return updated object not old one, useFindAndModify: false - to make sure uses correct up to date methods
    Contact.findOneAndUpdate({ _id: req.params.contactID }, req.body, { new: true, useFindAndModify: false }, (err, contact) => {
        if (err) {
            res.send(err)
        }
        res.json(contact)
    })
}

export const deleteContact = (req, res) => {
    Contact.remove({ _id: req.params.contactID }, (err, contact) => {
        if (err) {
            res.send(err)
        }
        res.json({ message: 'Successfully deleted contact'})
    })
}