import React from "react";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from '@orrisroot/react-html-parser';


export default class HtmlComponent extends React.Component {
    render() {
      const html = `<div>
     
      
      

   
  
  
  
         </div>`;
      return <div>{ ReactHtmlParser(html) }</div>;
    }
  }