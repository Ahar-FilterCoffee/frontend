import CryptoJS from 'crypto-js';

const secretKey = '032a1cc4-b171-4e5d-9685-4f7a9c87604f'; // Use a secure key and store it securely

export const encryptData = (data) => {
    const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
    return ciphertext;
}

export const decryptData = (ciphertext) => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
}
