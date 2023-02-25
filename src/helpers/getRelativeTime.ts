import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'


dayjs.extend(relativeTime)
dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: 'несколько секунд назад',
      m: "минуту назад",
      mm: "%d минут назад",
      h: "час назад",
      hh: "%d часов назад",
    //   hh: "%d hours",
      d: "день назад",
      dd: "%d дней назад",
      M: "месяц назад",
      MM: "%d несколько месяцев назад",
      y: "a year",
      yy: "%d years"
    }
  })

export const getRelativeTime = (time: Date) => {
    return dayjs(time).fromNow(true)
}