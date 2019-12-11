export default { name: 'Calendar', data() { return { weekNames: ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"], rootYear: 1904, rootDayOfWeekIndex: 4, currentYear: new Date().getFullYear(), currentMonth: new Date().getMonth() + 1, currentDay: new Date().getDate(), currentMonthStartWeekIndex: null, currentCalendarMatrix: [], endOfDay: null, memoDatas: [], } }, mounted() { this.init(); }, methods: { init: function () { this.currentMonthStartWeekIndex = this.getStartWeek(this.currentYear, this.currentMonth); this.endOfDay = this.getEndOfDay(this.currentYear, this.currentMonth); this.initCalendar(); }, initCalendar: function () { this.currentCalendarMatrix = []; let day = 1; for (let i = 0; i < 6; i++) { let calendarRow = []; for (let j = 0; j < 7; j++) { if (i == 0 && j year) { for (let i = 0; i < 12; i++) { sumOfDay += this.getEndOfDay(year, month + i); } year++; } else if(targetYear == year){ if (targetMonth > month) { sumOfDay += this.getEndOfDay(year, month); month++; } else if (targetMonth == month) { return (sumOfDay) % 7; } } } }, onClickPrev: function(month) { month--; if (month <= 0) { this.currentMonth = 12; this.currentYear -= 1; } else { this.currentMonth -= 1; } this.init(); }, onClickNext: function(month) { month++; if (month > 12) { this.currentMonth = 1; this.currentYear += 1; } else { this.currentMonth += 1; } this.init(); } } }