const express = require('express');
const router = new express.Router();
const mongoose=require('../db/mongoose');
const Question=require('../models/question')

router.get('/categories',async (req,res)=>{
    try{
        let categoryList = await Question.collection.distinct("category")
        console.info("List of all categories", categoryList);
        res.status(200).send(categoryList)
    }catch (error) {
        return res.status(500).json({"error":error})
    }
});


router.get('/getAllQuestions/:category', async (req,res)=>{
    try{
        const selectedCategory = req.params.category
        let questionsList = await Question.find({
            category: selectedCategory
        }).select({
            id: 1, 
            description: 1, 
            _id: 0, 
            options: {
                optionDescription: 1,
                id: 1
            }, 
            category: 1
        })
        // console.log(questionsList)
        res.status(200).send(questionsList)
    } catch(error){
        return res.status(500).json({"error":error})
    }

});


router.post('/submit/:category', async (req,res)=>{
    
       const answeredQuestions = req.body
      // console.info(req.body)
        const selectedCategory = req.params.category
        const questionsList = await Question.find({
            category: selectedCategory
        }).select({
            id: 1, 
            description: 1,
            _id: 0, 
            options: {
                optionDescription: 1,
                id: 1,
                isWriteAnswer: 1
            }, 
            category: 1
        })
        var userScore = 0;
        answeredQuestions?.forEach(element => {
            const _question = questionsList.find(q => {
                return q.id == element.questionId
            })
            const selectedSolutionObj = _question?.options.find(option => {
                return option.id == element.selectedSolutionId
            })
            
            if (selectedSolutionObj?.isWriteAnswer == true){
                userScore +=1;
            }
        });
        // console.log(userScore)
        res.status(201).send({userScore})
    

});

module.exports= router