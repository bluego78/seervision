//********************************************************************/
// This is the interface for the TODO STATE
//********************************************************************/

/* IMPORT INTERFACES */
import ITodo from '../Interfaces/ITodo';

export default interface ITodoState {
    isLoading:boolean;
    error:string|null;
    message:string|null;
    todos:Array<ITodo>;
}