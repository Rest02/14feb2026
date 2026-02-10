import { useState, useEffect } from "react";

export type DayStatus = "LOCKED" | "AVAILABLE" | "COMPLETED";

// Fechas objetivo (Año 2026)
const DATE_DAY_1 = "2026-02-10T13:00:00"; // Martes 10, 1:00 PM
const DATE_DAY_2 = "2026-02-11T13:00:00"; // Miércoles 11, 1:00 PM
const DATE_DAY_3 = "2026-02-13T00:00:00"; // Viernes 13, 12:00 AM (medianoche)
// Fin del evento (opcional, para marcar día 3 como completado si se desea)
const DATE_END = "2026-02-14T00:00:00"; // Sábado 14

export function useUnlockStatus() {
    const [status, setStatus] = useState<{
        day1: DayStatus;
        day2: DayStatus;
        day3: DayStatus;
        currentDate: Date | null;
    }>({
        day1: "LOCKED",
        day2: "LOCKED",
        day3: "LOCKED",
        currentDate: null,
    });

    useEffect(() => {
        const checkDate = () => {
            const now = new Date();
            // const now = new Date("2026-02-12T10:00:00"); // Uncomment for testing

            const d1 = new Date(DATE_DAY_1).getTime();
            const d2 = new Date(DATE_DAY_2).getTime();
            const d3 = new Date(DATE_DAY_3).getTime();
            const end = new Date(DATE_END).getTime();
            const current = now.getTime();

            let s1: DayStatus = "LOCKED";
            let s2: DayStatus = "LOCKED";
            let s3: DayStatus = "LOCKED";

            // Día 1 logic
            if (current >= d1) {
                s1 = current >= d2 ? "COMPLETED" : "AVAILABLE";
            }

            // Día 2 logic
            if (current >= d2) {
                s2 = current >= d3 ? "COMPLETED" : "AVAILABLE";
            }

            // Día 3 logic
            if (current >= d3) {
                // Opcional: Marcar como completado el 14 de feb?
                // Por ahora dejémoslo como AVAILABLE permanentemente o COMPLETED si pasa el 14
                s3 = current >= end ? "COMPLETED" : "AVAILABLE";
            }

            setStatus({
                day1: s1,
                day2: s2,
                day3: s3,
                currentDate: now,
            });
        };

        checkDate();
        // Revisar cada minuto por si cambia el día mientras está abierta
        const interval = setInterval(checkDate, 60000);
        return () => clearInterval(interval);
    }, []);

    return status;
}
