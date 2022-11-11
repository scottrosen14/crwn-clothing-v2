
import { AnyAction } from 'redux';

// Type alias with multiple placeholders
export interface ActionWithPayload<T, P> {
    type: T;
    payload?: P;
}

export interface Action<T> {
    type: T;
}

// Function overloading example
// Declare function type alias
export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;

// Declare function type alias
// Include payload: void because function must have the same number of parameters when overloading
export function createAction<T extends string, P>(type: T, payload: void): Action<T>;

export function createAction<T extends string, P>(type: T, payload: P) {
    return { type, payload };
}
