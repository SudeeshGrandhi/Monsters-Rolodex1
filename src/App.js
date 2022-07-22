import "./App.css";
import { Component, useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState("");

  const [monsters, setMonsters] = useState([]);
  const [filteredMonster, setFileteredMonster] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
      return res.json().then((users) => {
        setMonsters(users);
      });
    });
  }, []);

  useEffect(() => {
    const newFilteredMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFileteredMonster(newFilteredMonster);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    setSearchField(searchString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monster"
        className="monsters-search-box"
      />

      <CardList monsters={filteredMonster} />
    </div>
  );
};

export default App;

// const App = class extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchString: "",
//     };
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
//       return res
//         .json()

//         .then((users) => {
//           this.setState(() => {
//             return { monsters: users };
//           });
//         });
//     });
//   }
//   onSearchChange = (event) => {
//     const searchString = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchString };
//     });
//   };
//   render() {
//     const { monsters, searchString } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonster = monsters.filter((monsters) => {
//       return monsters.name.toLocaleLowerCase().includes(searchString);
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder="search monster"
//           className="monsters-search-box"
//         />

//         <CardList monsters={filteredMonster} />
//       </div>
//     );
//   }
// };
// export default App;

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("i have succeded");
//   }, 4000);
// });
// myPromise.catch((res) => {
//   console.log(res);
// });
