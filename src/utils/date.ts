import { IformattedDate } from "./types"

const weekList = ['周日','周一','周二','周三','周四','周五','周六']

export function formatDate(): IformattedDate {
    const dateInstance = new Date;
    return {
        month: dateInstance.getMonth() + 1,
        day: dateInstance.getDate(),
        week: weekList[dateInstance.getDay()],
        hour: dateInstance.getHours(),
        min: dateInstance.getMinutes()
    }
}