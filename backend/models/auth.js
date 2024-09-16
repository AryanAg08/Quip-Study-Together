const mongo = require("mongoose");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

const loginModel = new mongo.Schema({

    userName: {
        type: String,
        required: true,
        unique: true,
   },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true,
        validate: {
            validator: function(value) {
              return emailRegex.test(value);
            },
            message: (props) => `${props.value} is not a valid email address!`
          }
    },
    password: {
        type: String,
        required: true,
        // validate: {
        //     validator: function(value) {
        //       return passwordRegex.test(value);
        //     },
        //     message: () => 
        //       `Password must contain at least 8 characters, including an uppercase letter, a lowercase letter, a number, and a special character!`
        //   }
    },
   
    education: {
        type: [String],
        required: true,
        enum: ["Working Professional", "College/ University Student", "K-12/ Secondary Student", "Other"],
    },

    usage: {
      type: [String],
      required: true,
      enum: ["Personal", "Business", "School", "Job/work"],
    },

    workType: {
      type: [String],
      required: false,
      enum: ["Engineering", "Medical", "Accounting", "Others"],
    },

    currentGoals: {
      type: [String],
      required: false,
      enum: ["Career Development", "Skill Development", "Personal Development", "Others"],
    },

    hearAboutUS: {
      type: String,
      required: false,
    },
    
    country: {
      type : String, 
      required: true,
    },
    joinedOn: {
      type: Date,
      default: Date.now,
      required: true,
    }
  

});

module.exports = mongo.model("authUser", loginModel);