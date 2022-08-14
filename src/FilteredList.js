import {useMemo, useState} from "react";

export function FilteredList({
    usersList = [{name: "Folvin the folf", id: "#9892", age: 19}],
}) {
    const [users, setUsers] = useState(usersList);

    function filterUser() {
        return users.filter((user) => user.age > 18);
    }
    const filteredUsers = useMemo(() => filterUser(), [users]);

    return (
        <div>
            {filteredUsers.map((user, index) => (
                <h2 key={index}>
                    discord name: {user.name} | discord id: {user.id} | age: {user.age}
                </h2>
            ))}
        </div>
    );
}
