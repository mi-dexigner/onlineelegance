import React from "react";

interface HeadingProps {
    title?: string;
    content?: string;
  }
const Heading:React.FC<HeadingProps> = ({ title, content }) => {
    return ( 
        <div className="heading">
      {title && <h2>{title}</h2>}
      {content && <p>{content}</p>}
    </div>
    );
}
 
export default Heading;