export function getDashboardStats() {

  const tasks =
    JSON.parse(localStorage.getItem("lifeos_tasks")) || [];

  const pdfs =
    JSON.parse(localStorage.getItem("lifeos_pdfs")) || [];

  const expenses =
    JSON.parse(localStorage.getItem("lifeos_expenses")) || [];

  const spent = expenses.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  return {

    pdfCount: pdfs.length,

    taskCount: tasks.length,

    budgetLeft: 5000 - spent,

    spent,

  };

}