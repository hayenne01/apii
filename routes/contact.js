const express=require('express');
const router=express.Router();
const Contact= require('../models/Contact');

router.post('/',async(req,res)=>{
    let {name,email,age}=req.body
    age=Number(age)
    try {
        const contact=new Contact({
            name,email,age
        })
        await contact.save()
        res.send('contact added')
    } catch (error) {
        res.status(500).send('server error')
    }
});

router.get('/',async(req,res)=>{
    try {
        const contacts=await Contact.find()
        res.send(contacts);
    } catch (error) {
        res.status(500).send('server error')
    }
});
router.delete('/:contactId',async(req,res)=>{
    const {contactId}=req.params

try {
    await Contact.findByIdAndDelete(contactId);
    res.send("contact deleted");

    
} catch (error) {
    res.status(500).send('server error')
}});
router.put('/:contactId',async(req,res)=>{
    const {contactId}=req.params
    try {
        await Contact.findByIdAndUpdate(contactId,{$set:{...req.body}})
        res.send('contact Updated')
    } catch (error) {
        res.status(500).send('server error')
    }
});
router.get('/:contactId',async(req,res)=>{
    const {contactId}=req.params;
    try {
     const contact =   await Contact.findById(contactId)
     res.send(contact);
    } catch (error) {
        res.status(500).send('server error')
    }
})


module.exports= router;