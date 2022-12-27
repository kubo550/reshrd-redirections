import {collection, getDocs } from "@firebase/firestore";
import {db} from "../config/firebase";

type DbItem = {
    codeId: string,
    productId: string,
    imageUrl: string,
    linkUrl: string,
    name: string,
    title: string
};

type DbCustomer = {
    email: string,
    createdAt: string,
    items: DbItem[]
}


export async function getCustomers() {
    console.log('getCustomers');
    const customerRef = collection(db, 'customers');

    const documents = await getDocs(customerRef);
    return documents.docs.map(doc => doc.data());
}


export async function getRedirectUrlByCodeId(codeId: string) {
    console.log('getRedirectUrlByCodeId', {codeId});
    const customers = await getCustomers() as DbCustomer[];
    const customer = customers.find(customer => customer.items.find(item => item.codeId === codeId));
    if (!customer) {
        console.log('getRedirectUrlByCodeId - no customer found');
        return null;
    }
    const item = customer.items.find(item => item.codeId === codeId);
    if (!item) {
        console.log('getRedirectUrlByCodeId - no item found');
        return null;
    }
    return item.linkUrl;
}
