import { atom } from "recoil";
import data from '../Test2/data';


export interface IInfo {
    employee_id: number,
    employee_name: string,
    employee_department: string,
    employee_phone: string,
    employee_email: string,
}

export const employeesState = atom({
    key: 'peoplesState',
    default: data,
});

export const infoState = atom<IInfo>({
    key: 'infoState',
    default: {
    employee_id: 0,
    employee_name: "",
    employee_department: "",
    employee_phone: "",
    employee_email: "",
    }
});