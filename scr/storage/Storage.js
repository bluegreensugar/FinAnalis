import { MMKV } from "react-native-mmkv";
import { Alert } from 'react-native';

const storage = new MMKV();

export const deleteExpenseById = (date, id) => {
    const massExpenses = storage.getString('expenses');
    const expenses = massExpenses ? JSON.parse(massExpenses) : [];
    const daySection = expenses.findIndex((s) => s.title === date);
    expenses[daySection].data = expenses[daySection].data.filter((ex) => ex.id !== id);

    if (expenses[daySection].data.length == 0) {
        expenses.splice(daySection, 1);
    }
    storage.set('expenses', JSON.stringify(expenses));
    Alert.alert('Транзакция удалена');
};

export default storage;