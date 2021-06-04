import { useEffect } from "react";

// Hook
export function useKeyDown(targetKeyCode: string, callback: () => void) {
    // Add event listeners
    useEffect(() => {
        // If pressed key is our target key then set to true
        function downHandler(e: KeyboardEvent) {
            if (e.code === targetKeyCode) {
                callback();
            }
        }
        window.addEventListener('keydown', downHandler);
        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener('keydown', downHandler);
        };
    }, [callback, targetKeyCode]); // Empty array ensures that effect is only run on mount and unmount
}