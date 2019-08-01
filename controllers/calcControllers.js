//const db = require('./../models');
//query db for the logged in user = userobj
//pull out params for calc
//  user

module.exports = {
    //bmr calc for gender selection//calories = BMR + activity level
    //Macro calc = Fat=.29 x (cal/9), Protein .18 x (cal/4), Carb .53 x (cal/4)
getBMR: async (req, res) => {
    console.log(req.body)
    const {gender} = req.body;
    if(gender === 'female'){
        const femaleBMR = 655 + (4.3 * parseInt(req.body.weight)) + (4.7 * parseInt(req.body.height)) - (4.7 * parseInt(req.body.age));
        
        if(parseInt(req.body.activityLevel) === 1) {
            const calories = femaleBMR * 1.2;
            const Fat = parseInt(.29 * (calories/9));
            const Protein = parseInt(.18 * (calories/4)); 
            const Carb = parseInt(.53 * (calories/4)); 
            const Macros = {Fat, Protein, Carb};
            return res.json({ calories, Macros})
        
        } else if(parseInt(req.body.activityLevel) === 2) {
            const calories = femaleBMR * 1.375;
            const Fat = parseInt(.29 * (calories/9));
            const Protein = parseInt(.18 * (calories/4)); 
            const Carb = parseInt(.53 * (calories/4)); 
            const Macros = {Fat, Protein, Carb};
            return res.json({ calories, Macros})
        
        
        }else if(parseInt(req.body.activityLevel) === 3) {
            const calories = femaleBMR * 1.55;
            const Fat = parseInt(.29 * (calories/9));
            const Protein = parseInt(.18 * (calories/4)); 
            const Carb = parseInt(.53 * (calories/4)); 
            const Macros = {Fat, Protein, Carb};
            return res.json({ calories, Macros})
        
        }else if(parseInt(req.body.activityLevel) === 4) {
            const calories = femaleBMR * 1.725;
            const Fat = parseInt(.29 * (calories/9));
            const Protein = parseInt(.18 * (calories/4)); 
            const Carb = parseInt(.53 * (calories/4)); 
            const Macros = {Fat, Protein, Carb};
            return res.json({ calories, Macros})
        
        }else if (parseInt(req.body.activityLevel) === 5) {
            const calories = femaleBMR * 1.9
            const Fat = parseInt(.29 * (calories/9));
            const Protein = parseInt(.18 * (calories/4)); 
            const Carb = parseInt(.53 * (calories/4)); 
            const Macros = {Fat, Protein, Carb};
            return res.json({ calories, Macros})
        
        } else {
            return (error);
        }
        
    
    }
    if(gender === 'male'){
        const maleBMR = 66 + (6.3 * parseInt(req.body.weight)) + (12.9 * parseInt(req.body.height)) - (6.8 * parseInt(req.body.age));
        if(parseInt(req.body.activityLevel) === 1) {
            const calories = maleBMR * 1.2;
            const Fat = parseInt(.29 * (calories/9));
            const Protein = parseInt(.18 * (calories/4)); 
            const Carb = parseInt(.53 * (calories/4)); 
            const Macros = {Fat, Protein, Carb};
            return res.json({ calories, Macros  }); // if AL=1 + (maleBMR*1.2) = Display Calories
        
        } else if(parseInt(req.body.activityLevel) === 2){
            const calories = maleBMR * 1.375;
            const Fat = parseInt(.29 * (calories/9));
            const Protein = parseInt(.18 * (calories/4)); 
            const Carb = parseInt(.53 * (calories/4)); 
            const Macros = {Fat, Protein, Carb};

            return res.json({ calories, Macros }); 
        
        }else if(parseInt(req.body.activityLevel) === 3) {
            const calories = maleBMR * 1.55;
            const Fat = parseInt(.29 * (calories/9));
            const Protein = parseInt(.18 * (calories/4)); 
            const Carb = parseInt(.53 * (calories/4)); 
            const Macros = {Fat, Protein, Carb};
            return res.json({calories, Macros})
        
        }else if(parseInt(req.body.activityLevel) === 4) {
            const calories = maleBMR * 1.725;
            const Fat = parseInt(.29 * (calories/9));
            const Protein = parseInt(.18 * (calories/4)); 
            const Carb = parseInt(.53 * (calories/4)); 
            const Macros = {Fat, Protein, Carb};
            return res.json({calories, Macros})
        
        }else if (parseInt(req.body.activityLevel) === 5) {
            const calories = maleBMR * 1.9;
            const Fat = parseInt(.29 * (calories/9));
            const Protein = parseInt(.18 * (calories/4)); 
            const Carb = parseInt(.53 * (calories/4)); 
            const Macros = {Fat, Protein, Carb};
            return res.json({calories, Macros})
        
        }else {
            return (error);
        }
    }
}


}
