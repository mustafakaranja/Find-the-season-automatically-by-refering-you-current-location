import './SeasonDisplay.css'; //import the css
import React from 'react';

// this season congig is the field sdd to the text ,we can write the code directly to the return state maent but thats make the code unproffessional and junky hense we have create the config file and put hte sesson config on the return.

const seasonCofig = {
    summer : {
        text : 'Ahhhhhh!! its too Hot',
        iconName : 'sun' 
    },
    winter : {
        text : 'Give me a Hot Coffee Please',
        iconName : 'snowflake'
    }
};

const getseason = (lat,month) => {
    //logic for the months to get the summer or winter location in northern and southern hemisphere.remember the moths are start from the 0,1,2,.. and so on upto 11.

     if(month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter"
     } else{
        return lat > 0 ? "winter": "summer"
     }
};
const SeasonDisplay = (props) => {
    const season = getseason(props.lat, new Date().getMonth());
       const {text, iconName} = seasonCofig[season];
       //$(season)and other are the javascrip es2015 code.
  return <div className={`season-display ${season}`}> 
              <h2 className = 'project-name'> Project name: Find the season automatically, on you current location</h2>
            <h4 className= 'auther' > <h3>Author of this project :</h3> Mustafa Yusuf Karanjawala</h4>
           <i className={`icon-left massive ${iconName} icon`} />
           <h1>{text}</h1>
           <i className={`icon-right massive ${iconName} icon`} />
        </div>

};

export default SeasonDisplay;