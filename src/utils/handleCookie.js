import Cookies from "js-cookie";
import { encryptData, decryptData } from "./crypto";

const _usernameKey = "6a7d6f38-728b-4cfb-ae28-2d60d9b8c3a4";
const _passwordKey = "cb4e3d5a-bf4a-4fa0-ae3d-1d8f96ad9b0d";
const _orgNameKey = "fdc9b77d-cb6b-4e2a-80d6-8372e81930f8";
const _picKey = "97f3b076-f451-4a80-bc97-59adffdf3671";
const _locationKey = "cda8b97e-1e21-4058-9184-e7cde6b34559";
const _userTypeKey = "5dce7d27-6f1e-4e74-88f5-5f2cdd8ed40c";
const _userIdKey = "123uid123";

const cookieOptions = {
  expires: 7, // Expiry date of 7 days
  secure: true, // Ensure the cookie is sent over HTTPS
  sameSite: "Strict", // Ensures the cookie is not sent with cross-site requests
};

// Setters for cookies with encryption
const setUsername = (username) => {
  Cookies.set(_usernameKey, encryptData(username), cookieOptions);
};

const setOrgName = (orgName) => {
  Cookies.set(_orgNameKey, encryptData(orgName), cookieOptions);
};

const setPic = (pic) => {
  Cookies.set(_picKey, encryptData(pic), cookieOptions);
};

const setLocation = (location) => {
  Cookies.set(_locationKey, encryptData(location), cookieOptions);
};

const setUserType = (userType) => {
  Cookies.set(_userTypeKey, encryptData(userType), cookieOptions);
};

const setUserId = (userId) => {
  Cookies.set(_userIdKey, encryptData(userId), cookieOptions);
};

// Getters for cookies with decryption
const getUsername = () => {
  const encryptedUsername = Cookies.get(_usernameKey);
  return encryptedUsername ? decryptData(encryptedUsername) : null;
};

const getOrgName = () => {
  const encryptedOrgName = Cookies.get(_orgNameKey);
  return encryptedOrgName ? decryptData(encryptedOrgName) : null;
};

const getPic = () => {
  const encryptedPic = Cookies.get(_picKey);
  return encryptedPic ? decryptData(encryptedPic) : null;
};

const getLocation = () => {
  const encryptedLocation = Cookies.get(_locationKey);
  return encryptedLocation ? decryptData(encryptedLocation) : null;
};

const getUserType = () => {
  const encryptedUserType = Cookies.get(_userTypeKey);
  return encryptedUserType ? decryptData(encryptedUserType) : null;
};

const getUserId = () => {
  const encryptedUserId = Cookies.get(_userIdKey);
  return encryptedUserId ? decryptData(encryptedUserId) : null;
};

// Clear cookies for logout
const clearStorage = () => {
  Cookies.remove(_usernameKey);
  Cookies.remove(_userIdKey);
  Cookies.remove(_orgNameKey);
  Cookies.remove(_picKey);
  Cookies.remove(_locationKey);
  Cookies.remove(_userTypeKey);
};

export {
  setUsername,
  setUserId,
  setOrgName,
  setPic,
  setLocation,
  setUserType,
  getUsername,
  getUserId,
  getOrgName,
  getPic,
  getLocation,
  getUserType,
  clearStorage,
};
