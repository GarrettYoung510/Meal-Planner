//const db = require('./../models');
//query db for the logged in user = userobj
//pull out params for calc
//  user


module.exports = {
    //bmr calc for gender selection//calories = BMR + activity level
getBMR: async (req, res) => {
    const {gender} = req.body;
    if(gender === 'female'){
        const femaleBMR = 655 + (4.3 * user.weight) + (4.7 * user.height) - (4.7 * user.age);
        if(req.body.activityLevel === 1) {
            return res.json({ calories: femaleBMR * 1.2 });
        } else if(req.body.activityLevel === 2) {
            return res.json({calories: femaleBMR * 1.375})
        }else if(req.body.activityLevel === 3) {
            return res.json({calories: femaleBMR * 1.55})
        }else if(req.body.activityLevel === 4) {
            return res.json({calories: femaleBMR * 1.725})
        }else if (req.body.activityLevel === 5) {
            return res.json({calories: femaleBMR * 1.9})
        } else {
            return (error);
        }
        
    
    }
    if(gender === 'male'){
        const maleBMR = 66 + (6.3 * user.weight) + (12.9 * user.height) - (6.8 * user.age);
        if(req.body.activityLevel === 1) {
            return res.json({ calories: maleBMR * 1.2 });
        } else if(req.body.activityLevel === 2){
            return res.json({ calories: maleBMR * 1.375 });
        }else if(req.body.activityLevel === 3) {
            return res.json({calories: maleBMR * 1.55})
        }else if(req.body.activityLevel === 4) {
            return res.json({calories: maleBMR * 1.725})
        }else if (req.body.activityLevel === 5) {
            return res.json({calories: maleBMR * 1.9})
        }
    }
}

//Macro calc = Fat=.29 x (cal/9), Protein .18 x (cal/4), Carb .53 x (cal/4)
}
