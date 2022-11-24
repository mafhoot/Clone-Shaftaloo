import Comments from "./comments/Comments";
import "./App.css";


const App = () => {
  return (
    <div>
      <div className="background">
		  	<div className="bg-pattern-top"></div>
        
            <Comments
        
              currentUserId="2"
            />
        </div>   
    </div>
  );
};

export default App;






