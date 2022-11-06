import { useState } from 'react';
import './App.css';
import EditableUserProfile from './components/EditableUserProfile';
import UserProfile from './components/UserProfile';





// const animals = [
//     "Aardvark",
//     "Albatross",
//     "Alpaca",
//     "Alligator",
//     "Anchovie",
//     "Angelfish",
//     "Ant",
//     "Antelope",
//     "Armadillo",
//     "Aurochs",
//     "Axolotl"
// ]

function randomColor() {
    return "#123456789";
}

// function randomName() {
//     return "Anonymous " + animals[Math.floor(Math.random() * animals.length)]
// }




function App() {
    const now = new Date(Date.now());
    const defaultBirthday = new Date(now.getTime() + 86400000);

    const [editMode, setEditMode] = useState(false);

    const [name, setName] = useState();
    const [month, setMonth] = useState(defaultBirthday.getMonth());
    const [day, setDay] = useState(defaultBirthday.getDate());
    const [color, setColor] = useState(randomColor());

    const stored = {name, month, day, color};
    const isBirthdayToday = now.getMonth() === month && now.getDate() === day;

    // function handleEditComplete(result) {
    //     console.log("handleEditComplete", result);
    //     if (result != null) {
    //         setName(result.name);
    //         setMonth(result.month);
    //         setDay(result.day);
    //         setColor(result.color);
    //     }        
    //     setEditMode(false);
    // }

    return (
        // <div className="container">
            <div className="App">                 
                {
                    editMode
                        ? <>
                            <h1>Profile</h1>
                            <span></span>
                            <EditableUserProfile
                                    stored={stored}
                                    // editCompleteCallback={handleEditComplete}                            
                            />
                        </>
                        : <>
                           
                               
                                     {/* <div className="birthday">Happy Birthday!</div>
                                    <h1>My Profile</h1>
                             */}
                            <UserProfile
                                    stored={stored}
                                    startEditCallback={() => setEditMode(true)}
                            />
                        </>
                }            
            </div>
        // </div>
    );
}

export default App;








// function App2() {
//     const [search, setSearch] = useState("");
  
//     return (
//       <Router>
//         <Header setSearch={(s) => setSearch(s)} />
//         <main className="App">
//           <Route path="/" component={LandingPage} exact />
//           <Route path="/login" component={LoginScreen} />
//           <Route path="/register" component={RegisterScreen} />
//           <Route
//             path="/mynotes"
//             component={({ history }) => (
//               <MyNotes search={search} history={history} />
//             )}
//           />
//           <Route path="/note/:id" component={SingleNote} />
//           <Route path="/createnote" component={CreateNote} />;
//           <Route path="/profile" component={ProfileScreen} />
//         </main>
//         <Footer />
//       </Router>
//     );
//   }



