import React, { Component } from "react";


import * as Survey from "survey-core";
import * as SurveyReact from "survey-react-ui";



import "survey-core/modern.css";


Survey.StylesManager.applyTheme("modern");


class SurveyComponent extends Component {
    constructor() {
        super();
        
      const sub = this.getSub()
      
      if (sub==='arts'){
        const json = {
          "elements": [
            {
              "type": "matrix",
              "name": "Quality",
              "title": "Please indicate if you agree or disagree with the following statements",
              "columns": [
                {
                  "value": 0,
                  "text": "Strongly Agree"
                },
                {
                  "value": 1,
                  "text": "Neutral"
                },
                {
                    "value":2,
                    "text":"Strongly Disagree"
                }
              ],
              "rows": [
                {
                  "value": "Maths",
                  "text": "Product is affordable"
                },
                {
                  "value": "does what it claims",
                  "text": "Product does what it claims"
                },
                {
                  "value": "better then others",
                  "text": "Product is better than other products on the market"
                },
                {
                  "value": "easy to use",
                  "text": "Product is easy to use"
                }
              ]
            }
          ]
        };
      }
      else if (sub==='commerce'){
        console.log(sub,'commerce')
        var json = {
          "elements": [
            {
              "type": "matrix",
              "name": "Quality",
              "title": "Please indicate if you agree or disagree with the following statements",
              "columns": [
                {
                  "value": 0,
                  "text": "Strongly Agree"
                },
                {
                  "value": 1,
                  "text": "Neutral"
                },
                {
                    "value":2,
                    "text":"Strongly Disagree"
                }
              ],
              "rows": [
                {
                  "value": "accounts",
                  "text": "Accounts"
                },
                {
                  "value": "audits",
                  "text": "Audits"
                },
                {
                  "value": "taxes",
                  "text": "Taxes"
                },
                {
                  "value": "finance",
                  "text": "finance"
                },
                {
                  "value": "business",
                  "text": "business"
                },
                {
                  "value": "economics",
                  "text": "economics"
                },
                {
                  "value": "maths",
                  "text": "maths"
                },
                
              ]
            }
          ]
        };
      }
        else if (sub==='science'){
         var json = {
            "elements": [
              {
                "type": "matrix",
                "name": "Quality",
                "title": "Please indicate if you agree or disagree with the following statements",
                "columns": [
                  {
                    "value": 0,
                    "text": "Strongly Agree"
                  },
                  {
                    "value": 1,
                    "text": "Neutral"
                  },
                  {
                      "value":2,
                      "text":"Strongly Disagree"
                  }
                ],
                "rows": [
                  {
                    "value": "maths",
                    "text": "maths"
                  },
                  {
                    "value": "physics",
                    "text": "physics"
                  },
                  {
                    "value": "chemistry",
                    "text": "chemistry"
                  },
                  {
                    "value": "bio",
                    "text": "bio"
                  }
                ]
              }
            ]
          };
        }
        else{
          var json = {
            "elements": [
              {
                "type": "matrix",
                "name": "Quality",
                "title": "Please indicate if you agree or disagree with the following statements",
                "columns": [
                  {
                    "value": 0,
                    "text": "Strongly Agree"
                  },
                  {
                    "value": 1,
                    "text": "Neutral"
                  },
                  {
                      "value":2,
                      "text":"Strongly Disagree"
                  }
                ],
                "rows": [
                  {
                    "value": "Maths",
                    "text": "NA"
                  },
                  {
                    "value": "does what it claims",
                    "text": "NA"
                  },
                  {
                    "value": "better then others",
                    "text": "NA"
                  },
                  {
                    "value": "easy to use",
                    "text": "NA"
                  }
                ]
              }
            ]
          };
        }

const survey = new Survey.Model(json);
        this.survey = survey;

        
        
        
    }

    getSub(){
      let sub = localStorage.getItem('sub')
      console.log(sub)
      return sub 
    }
     onComplete(survey, options) {
      //Write survey results into database
      localStorage.setItem('survey_subjects',JSON.stringify(survey.data) )
      console.log("survey_: " + JSON.stringify(survey.data));
     }        
    
    render() {
        return (
            <SurveyReact.Survey
                model={this.survey}
                onComplete = {this.onComplete}
            />
        );
    }
}

export default SurveyComponent;