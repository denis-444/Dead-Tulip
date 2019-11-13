export const select = (contact) => {
    alert ("Now contact is:" + contact.name);
    return {
        type: "CONTACT_SELECTED",
        payload: contact
    }
};