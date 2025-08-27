export const getUser = () => fetch("./data.json").then((res) => res.json);
