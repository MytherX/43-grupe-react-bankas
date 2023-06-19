import { v4 as uuidv4 } from 'uuid';

// funkcija read (skaitymas)
const read = key => {
    const data = localStorage.getItem(key);
    if (null === data) {
        return [];
    } else {
        return JSON.parse(data);
    }
}

// funkcija write (irasymas)
const write = (key, data) => localStorage.setItem(key, JSON.stringify(data));

// CRUD - read (skaitymas)
export const crudRead = key => read(key);

// CRUD - create(sukurimas)
export const crudCreate = (key, data) => write(key, [...read(key), {...data, id: uuidv4() }]);

// CRUD - edit, update (redagavimas)
export const crudEdit = (key, data, id) => write(key, read(key).map(d => d.id === id ? {...d, ...data, id } : {...d }));

// CRUD - delete (naikinimas)
export const crudDelete = (key, id) => write(key, read(key).filter(d => d.id !== id));