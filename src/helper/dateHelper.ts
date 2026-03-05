const today = new Date();

const minDate = today.toISOString().split("T")[0];

const max = new Date();
max.setMonth(max.getMonth() + 2);

const maxDate = max.toISOString().split("T")[0];
