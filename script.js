const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');
const currentMonthDisplay = document.getElementById('current-month');
const calendarBody = document.getElementById('calendar-body');

// Get the current date
let currentDate = new Date();

// Function to display the calendar for the current month
function displayCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Set the current month display
    currentMonthDisplay.textContent = `${new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(currentDate)}`;

    // Clear the calendar body
    calendarBody.innerHTML = '';

    // Get the number of days in the current month
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();

    // Get the day of the week for the first day of the month
    const firstDayOfWeek = new Date(year, month, 1).getDay();

    // Create a table for the calendar
    const table = document.createElement('table');
    const row = table.insertRow();

    // Create the header row with day names
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (let day of daysOfWeek) {
        const cell = document.createElement('th');
        cell.textContent = day;
        row.appendChild(cell);
    }

    // Create the calendar cells
    let day = 1;
    for (let i = 0; i < 6; i++) {
        if (day > lastDayOfMonth) {
            break;
        }
        const newRow = table.insertRow();
        for (let j = 0; j < 7; j++) {
            const cell = newRow.insertCell();
            if (i === 0 && j < firstDayOfWeek) {
                // Empty cells before the first day of the month
                continue;
            }
            if (day <= lastDayOfMonth) {
                cell.textContent = day;
                day++;
            }
        }
    }

    // Append the table to the calendar body
    calendarBody.appendChild(table);
}

// Display the calendar for the current month
displayCalendar();

// Event listeners for navigating to previous and next months
prevMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    displayCalendar();
});

nextMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    displayCalendar();
});