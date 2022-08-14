import {FilteredList} from "./FilteredList";

export function App() {
    return (
        <div>
            <FilteredList
                usersList={[
                    {name: "HalfBlood NIK", id: "#4364", age: 20},
                    {name: "Usuku", id: "#5541", age: 20},
                    {name: "ApocEnd", id: "#7758", age: 21},
                    {name: "Folvin the folf", id: "#9892", age: 19},
                    {name: "tizio a caso", id: "#bho", age: 14},
                ]}
            />
        </div>
    );
}
