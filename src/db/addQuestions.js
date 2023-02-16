const express=require('express');
const {v4 : uuidv4, v4} = require('uuid')

const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/quizApp',{ useNewUrlParser:true,useUnifiedTopology: true});

const Schema = mongoose.Schema;

const questionSchema = new Schema({
    id: { type: String },
    description: { type: String },
    options: {type: [{
        id: { type: String },
        optionDescription: { type: String },
        isWriteAnswer: { type: Boolean, default: false }
    }]},
    category: String
});

const Question = mongoose.model('Question', questionSchema);

const questions = [
    {
        "question": "During the times of Mahabharata, Haryana was referred with which of the following names ?",
        category: "MATHS",
        options: [
            {
                optionsDescription: "Bahudhanyaka",
                isCorrect: true
            },
            {
                optionsDescription: "Hitapradesh",
            },
            {
                optionsDescription: "Vindyapradesh",
            },
            {
                optionsDescription: "Ditarashtra",
            }
        ]
     },
    {
        "question": "The old name of kurukshetra was ?",
        category: "PHYSICS",
        options: [
            {
                optionDescription: "Narashtra",
            },
            {
                optionDescription: "Thanesar",
                isCorrect: true
            },
            {
                optionDescription: "Yugandhar",
            },
            {
                optionDescription: "Rohitasgarh",
            }
        ]
    }, 
    {
        "question": "Statue of Baliram has been found from which place of Haryana?",
        category: "GENERAL_KNOWLEDGE",
        options: [
            {
                optionsDescription: "Rohtak",
                isCorrect: true
            },
            {
                optionsDescription: "Sonipat",
            },
            {
                optionsDescription: "Bhiwani",
            },
            {
                optionsDescription: "Barwala",
            }
        ]
    },
    {
        "question": "During the times of Mahabharata, Haryana was referred with which of the following names ?",
        category: "MATHS",
        options: [
            {
                optionsDescription: "Bahudhanyaka",
                isCorrect: true
            },
            {
                optionsDescription: "Hitapradesh",
            },
            {
                optionsDescription: "Vindyapradesh",
            },
            {
                optionsDescription: "Ditarashtra",
            }
        ]
     },
    {
        "question": "The old name of kurukshetra was ?",
        category: "PHYSICS",
        options: [
            {
                optionDescription: "Narashtra",
            },
            {
                optionDescription: "Thanesar",
                isCorrect: true
            },
            {
                optionDescription: "Yugandhar",
            },
            {
                optionDescription: "Rohitasgarh",
            }
        ]
    }, 
    {
        "question": "Statue of Baliram has been found from which place of Haryana?",
        category: "GENERAL_KNOWLEDGE",
        options: [
            {
                optionsDescription: "Rohtak",
                isCorrect: true
            },
            {
                optionsDescription: "Sonipat",
            },
            {
                optionsDescription: "Bhiwani",
            },
            {
                optionsDescription: "Barwala",
            }
        ]
    },
    {
        "question": "During the times of Mahabharata, Haryana was referred with which of the following names ?",
        category: "MATHS",
        options: [
            {
                optionsDescription: "Bahudhanyaka",
                isCorrect: true
            },
            {
                optionsDescription: "Hitapradesh",
            },
            {
                optionsDescription: "Vindyapradesh",
            },
            {
                optionsDescription: "Ditarashtra",
            }
        ]
     },
    {
        "question": "The old name of kurukshetra was ?",
        category: "PHYSICS",
        options: [
            {
                optionDescription: "Narashtra",
            },
            {
                optionDescription: "Thanesar",
                isCorrect: true
            },
            {
                optionDescription: "Yugandhar",
            },
            {
                optionDescription: "Rohitasgarh",
            }
        ]
    }, 
    {
        "question": "Statue of Baliram has been found from which place of Haryana?",
        category: "GENERAL_KNOWLEDGE",
        options: [
            {
                optionsDescription: "Rohtak",
                isCorrect: true
            },
            {
                optionsDescription: "Sonipat",
            },
            {
                optionsDescription: "Bhiwani",
            },
            {
                optionsDescription: "Barwala",
            }
        ]
    },{
        "question": "During the times of Mahabharata, Haryana was referred with which of the following names ?",
        category: "MATHS",
        options: [
            {
                optionsDescription: "Bahudhanyaka",
                isCorrect: true
            },
            {
                optionsDescription: "Hitapradesh",
            },
            {
                optionsDescription: "Vindyapradesh",
            },
            {
                optionsDescription: "Ditarashtra",
            }
        ]
     },
    {
        "question": "The old name of kurukshetra was ?",
        category: "PHYSICS",
        options: [
            {
                optionDescription: "Narashtra",
            },
            {
                optionDescription: "Thanesar",
                isCorrect: true
            },
            {
                optionDescription: "Yugandhar",
            },
            {
                optionDescription: "Rohitasgarh",
            }
        ]
    }, 
    {
        "question": "Statue of Baliram has been found from which place of Haryana?",
        category: "GENERAL_KNOWLEDGE",
        options: [
            {
                optionsDescription: "Rohtak",
                isCorrect: true
            },
            {
                optionsDescription: "Sonipat",
            },
            {
                optionsDescription: "Bhiwani",
            },
            {
                optionsDescription: "Barwala",
            }
        ]
    },{
        "question": "During the times of Mahabharata, Haryana was referred with which of the following names ?",
        category: "MATHS",
        options: [
            {
                optionsDescription: "Bahudhanyaka",
                isCorrect: true
            },
            {
                optionsDescription: "Hitapradesh",
            },
            {
                optionsDescription: "Vindyapradesh",
            },
            {
                optionsDescription: "Ditarashtra",
            }
        ]
     },
    {
        "question": "The old name of kurukshetra was ?",
        category: "PHYSICS",
        options: [
            {
                optionDescription: "Narashtra",
            },
            {
                optionDescription: "Thanesar",
                isCorrect: true
            },
            {
                optionDescription: "Yugandhar",
            },
            {
                optionDescription: "Rohitasgarh",
            }
        ]
    }, 
    {
        "question": "Statue of Baliram has been found from which place of Haryana?",
        category: "GENERAL_KNOWLEDGE",
        options: [
            {
                optionsDescription: "Rohtak",
                isCorrect: true
            },
            {
                optionsDescription: "Sonipat",
            },
            {
                optionsDescription: "Bhiwani",
            },
            {
                optionsDescription: "Barwala",
            }
        ]
    },{
        "question": "During the times of Mahabharata, Haryana was referred with which of the following names ?",
        category: "MATHS",
        options: [
            {
                optionsDescription: "Bahudhanyaka",
                isCorrect: true
            },
            {
                optionsDescription: "Hitapradesh",
            },
            {
                optionsDescription: "Vindyapradesh",
            },
            {
                optionsDescription: "Ditarashtra",
            }
        ]
     },
    {
        "question": "The old name of kurukshetra was ?",
        category: "PHYSICS",
        options: [
            {
                optionDescription: "Narashtra",
            },
            {
                optionDescription: "Thanesar",
                isCorrect: true
            },
            {
                optionDescription: "Yugandhar",
            },
            {
                optionDescription: "Rohitasgarh",
            }
        ]
    }, 
    {
        "question": "Statue of Baliram has been found from which place of Haryana?",
        category: "GENERAL_KNOWLEDGE",
        options: [
            {
                optionsDescription: "Rohtak",
                isCorrect: true
            },
            {
                optionsDescription: "Sonipat",
            },
            {
                optionsDescription: "Bhiwani",
            },
            {
                optionsDescription: "Barwala",
            }
        ]
    }
]

questions.forEach(question => {
    const _options = question.options.map(option => {
        return {
            id: v4(),
            optionDescription: option.optionDescription,
            isWriteAnswer: option.isCorrect == true
        }
    })
    console.log(_options)
    Question({
        id: v4(),
        description: question.question,
        options: _options,
        category: question.category
    }).save().then(() => {
        console.log("saved")
    })
})

