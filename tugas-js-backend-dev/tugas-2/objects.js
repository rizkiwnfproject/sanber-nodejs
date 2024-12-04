const task = {
    title: "ini judul kerja-nya",
    description: "ceritain detail pekerjaanya disini",
    isDone: false,
};

const taskSpread = { ...task };
console.log("task spread: ", taskSpread);
const { title, description, isDone } = task;
console.log("destruct -> title: ", title);
console.log("destruct -> description: ", title);
console.log("destruct -> isDone: ", isDone);
