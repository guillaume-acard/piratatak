import { useEffect } from "react";

// Hook
export function useKeyDown(targetKeyCode: string, callback: () => void) {
    // If pressed key is our target key then set to true
    function downHandler(e: KeyboardEvent) {
        if (e.code === targetKeyCode) {
            callback();
        }
    }

    // Add event listeners
    useEffect(() => {
        window.addEventListener('keydown', downHandler);
        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener('keydown', downHandler);
        };
    }, [downHandler]); // Empty array ensures that effect is only run on mount and unmount
}