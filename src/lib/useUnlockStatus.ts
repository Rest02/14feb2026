import { useState, useEffect } from "react";

export type DayStatus = "LOCKED" | "AVAILABLE" | "COMPLETED";

// Fechas objetivo (Año 2026)
// Fechas objetivo (Año 2026)
const DATE_DAY_1 = "2026-02-06T00:09:00"; // Miércoles
const DATE_DAY_2 = "2026-02-06T00:09:00"; // Jueves
const DATE_DAY_2_DINNER = "2026-02-09T21:35:00"; // Jueves Cena (Ejemplo para testing)
const DATE_DAY_3 = "2026-02-06T00:09:00"; // Viernes
// Fin del evento (opcional, para marcar día 3 como completado si se desea)
const DATE_END = "2026-02-14T00:00:00"; // Sábado

export function useUnlockStatus() {
    const [status, setStatus] = useState<{
        day1: DayStatus;
        day2: DayStatus;
        day2Dinner: DayStatus;
        day3: DayStatus;
        currentDate: Date | null;
    }>({
        day1: "LOCKED",
        day2: "LOCKED",
        day2Dinner: "LOCKED",
        day3: "LOCKED",
        currentDate: null,
    });

    useEffect(() => {
        const checkDate = () => {
            const now = new Date();
            // const now = new Date("2026-02-12T10:00:00"); // Uncomment for testing

            const d1 = new Date(DATE_DAY_1).getTime();
            const d2 = new Date(DATE_DAY_2).getTime();
            const d2Dinner = new Date(DATE_DAY_2_DINNER).getTime();
            const d3 = new Date(DATE_DAY_3).getTime();
            const end = new Date(DATE_END).getTime();
            const current = now.getTime();

            let s1: DayStatus = "LOCKED";
            let s2: DayStatus = "LOCKED";
            let s2Dinner: DayStatus = "LOCKED";
            let s3: DayStatus = "LOCKED";

            // Día 1 logic
            if (current >= d1) {
                s1 = current >= d2 ? "COMPLETED" : "AVAILABLE";
            }

            // Día 2 logic
            if (current >= d2) {
                s2 = current >= d3 ? "COMPLETED" : "AVAILABLE";
            }

            // Día 2 Dinner Logic
            if (current >= d2Dinner) {
                s2Dinner = "AVAILABLE"; // O COMPLETED si pasa d3?
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
                day2Dinner: s2Dinner, // Add this
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
