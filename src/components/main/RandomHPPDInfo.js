import React from 'react';
import './RandomHPPDInfo.css';

class RandomHPPDInfo extends React.Component {
   
    random = (Min,Max) =>{
		var Range = Max - Min;   
		var Rand = Math.random();   
		return (Min + Math.round(Rand * Range));
	}
	

    setRandomValues = () =>
      {

        let randomHPPD = this.random(1,30);
        let randomBedUnit = this.random(1,60);
        let randomCensus = this.random(1,randomBedUnit);

        let info ={
            unit:"Random Hospital Unit",
            HPPD: randomHPPD,
            bedUnit:randomBedUnit,
            census: randomCensus,
        }


        this.props.onInfoChange(info); 
  
      }  

    render() {


        return (
            <button type="button" className="btn btn-outline-primary" data-testid="random-id" onClick={this.setRandomValues}>Random Scenario</button>
        );
    }
}

export default RandomHPPDInfo;
