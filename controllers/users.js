export const getUsers = async (req, res) => {

    try {
        const users = [{"name":"Marcos"},{"name":"Juan"}]

        res.status(200).send(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}