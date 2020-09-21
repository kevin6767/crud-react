export const getUsers = async () => {
    const data = await fetch('https://randomuser.me/api/?results=5');
    return data.json()
}
