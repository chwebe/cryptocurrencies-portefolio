const taskStatusList = ["Pending", "In Progress", "Done"] as const; //as const makes taskStatusList a readonly tuple of exact string literals.

type TaskStatus = (typeof taskStatusList)[number]; // typeof taskStatusList[number] extracts a union of the values: 'Pending' | 'In Progress' | 'Done'

const taskStatus: TaskStatus = "Pending";
console.log(taskStatus);
console.log(taskStatusList);
