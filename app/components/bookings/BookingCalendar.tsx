"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function startOfDay(date: Date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function sameDay(first: Date, second: Date) {
    return (
        first.getFullYear() === second.getFullYear() &&
        first.getMonth() === second.getMonth() &&
        first.getDate() === second.getDate()
    );
}

type Props = {
    selected: Date | null;
    onSelect: (date: Date) => void;
};

export default function BookingCalendar({ selected, onSelect }: Props) {
    const today = startOfDay(new Date());
    const [viewMonth, setViewMonth] = useState(
        new Date(today.getFullYear(), today.getMonth(), 1),
    );
    const year = viewMonth.getFullYear();
    const month = viewMonth.getMonth();
    const firstWeekday = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const totalCells = Math.ceil((firstWeekday + daysInMonth) / 7) * 7;
    const cells = Array.from(
        { length: totalCells },
        (_, index) => new Date(year, month, 1 - firstWeekday + index),
    );
    const isCurrentMonth =
        year === today.getFullYear() && month === today.getMonth();
    const label = viewMonth.toLocaleString("en-US", {
        month: "long",
        year: "numeric",
    });

    return (
        <div>
            <div className="flex items-center justify-between">
                <button
                    type="button"
                    disabled={isCurrentMonth}
                    aria-label="Previous month"
                    onClick={() => setViewMonth(new Date(year, month - 1, 1))}
                    className="rounded-full p-1 text-[#6A1B82] hover:bg-[#D8B4E5] disabled:cursor-not-allowed disabled:opacity-30"
                >
                    <ChevronLeft className="h-4 w-4" />
                </button>
                <p className="text-sm font-semibold text-[#2B063F]">{label}</p>
                <button
                    type="button"
                    aria-label="Next month"
                    onClick={() => setViewMonth(new Date(year, month + 1, 1))}
                    className="rounded-full p-1 text-[#6A1B82] hover:bg-[#D8B4E5]"
                >
                    <ChevronRight className="h-4 w-4" />
                </button>
            </div>
            <div className="mt-3 grid grid-cols-7 gap-y-1 text-center">
                {weekdays.map((weekday) => (
                    <span key={weekday} className="text-[10px] font-semibold text-[#A08BA8]">
                        {weekday}
                    </span>
                ))}
                {cells.map((date) => {
                    const inMonth = date.getMonth() === month;
                    const disabled = !inMonth || date < today;
                    const isSelected = Boolean(selected && sameDay(date, selected));

                    return (
                        <button
                            key={date.toISOString()}
                            type="button"
                            disabled={disabled}
                            onClick={() => onSelect(date)}
                            className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full text-xs transition ${
                                isSelected
                                    ? "bg-[#6A1B82] font-semibold text-white"
                                    : disabled
                                      ? "cursor-not-allowed text-[#A08BA8]"
                                      : "text-[#2B063F] hover:bg-[#D8B4E5]"
                            }`}
                        >
                            {date.getDate()}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
