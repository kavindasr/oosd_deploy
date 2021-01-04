
function renderCalendar(arr,year_month) {
    var list = [];
    arr.dateList.forEach(element => {
        list.push({
            start: element.tdate,
            allDay: true,
            display: 'background',
        })
    });
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar : {
            start: 'title',
            center: '',
            end: ''
        },
        initialDate: new Date(year_month+'-1'),
        height : 500,
        events: list,
        eventColor: '#378006',
        
    });
    calendar.render();
}
