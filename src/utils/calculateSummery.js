export function calculateSummary(tasks) {
    const total = tasks.length;
    const completed = tasks.filter(task => task.done).length;
    return {total, completed};
}